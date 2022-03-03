import { Product } from "../../../types/product";
import * as C from "./styles";

type Props = {
    product: Product[];
}

const Item: React.FC<Props> = ({ product }) => {
    
    return (
        <C.Container>
            <C.ImageWrapper>
                {product.conditions.isNew ? <C.NewWrapper>NEW</C.NewWrapper> : ''}
                {!product.conditions.isAvailable ? <C.AvailableWrapper>SOLD OUT!</C.AvailableWrapper> : ''}
                <C.Image src={product.imageThumb} alt="Product image"/>
            </C.ImageWrapper>
            <C.DescriptionWrapper>
                <C.Name>{product.name}</C.Name>

                <C.PriceWrapper>
                    <C.Price hasDiscount={product.conditions.hasDiscount}>R$ {product.pricing.price}</C.Price>
                    {product.conditions.hasDiscount ? <C.PriceDiscount>R$ {product.pricing.discountPrice}</C.PriceDiscount> : ''}
                </C.PriceWrapper>

            </C.DescriptionWrapper>
        </C.Container>
    )
}

export default Item;