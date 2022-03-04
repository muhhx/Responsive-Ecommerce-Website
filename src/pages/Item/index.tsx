import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProduct } from "../../context/productContext";
import { useCart } from "../../context/cartContext";
import { Product } from "../../types/product";
import * as C from "./styles";

const Item: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const [currentColor, setCurrentColor] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<string>("")

    const [error, setError] = useState<string | null>(null)

    const { products } = useProduct()
    const { addCart } = useCart()
    const location = useLocation()
    
    useEffect(() => {
        const productId = location.pathname.split('').slice(9).join('')
        setCurrentProduct(products.filter(product => product.id === productId)[0])
    }, [products])

    function changesColor(index: number) {
        setCurrentColor(index)
        setCurrentSize("")
    }

    function handleAddCart() {
        setError(null)

        if(currentSize === "")
            return setError("Selecione um tamanho para continuar")

        if(currentProduct)
            addCart(currentProduct, currentProduct.colors[currentColor].colorName, currentSize)
    }

    return (
        <C.Section>
            <C.ImagesContainer>
                {currentProduct?.colors[currentColor].images.map((image, key) => (
                    <C.Image url={image} key={key}/>
                ))}
            </C.ImagesContainer>
            <C.InformationContainer>
                <C.InformationWrapper>
                    <C.Divider>
                        {currentProduct?.conditions.isNew ? <C.Category>NOVO</C.Category> : ''}
                        <C.Title>{currentProduct?.name}</C.Title>
                        <C.Description>{currentProduct?.description}</C.Description>
                    </C.Divider>
                    {error ? <C.Category>{error}</C.Category> : ''}
                    <C.Wrapper>
                        <C.Price hasDiscount={currentProduct?.conditions.hasDiscount ? true : false}>R$ {currentProduct?.pricing.price}</C.Price>
                        {currentProduct?.conditions.hasDiscount ? <C.Discount>R$ {currentProduct.pricing.discountPrice}</C.Discount> : ''}
                    </C.Wrapper>
                    <C.Divider>
                        <C.OptionsWrapper>
                            <C.OptionName>Size:</C.OptionName>
                            {currentProduct?.colors[currentColor].sizes.map((size, key) => (
                                <C.Option key={key} onClick={() => setCurrentSize(size)} isSelected={currentSize === size ? true : false}>{size}</C.Option>
                            ))}
                        </C.OptionsWrapper>
                        <C.OptionsWrapper>
                            <C.OptionName>Color:</C.OptionName>
                            {currentProduct?.colors.map((color, index) => (
                                <C.ColorBorder key={index} onClick={() => changesColor(index)} isSelected={currentColor === index ? true : false}>
                                    <C.Color rgb={color.colorRgb}/>
                                </C.ColorBorder>
                            ))}
                        </C.OptionsWrapper>
                    </C.Divider>
                    <C.Divider>
                        <C.Wrapper>
                            {currentProduct?.conditions.isAvailable ? <C.Button onClick={handleAddCart}>Adicionar ao carrinho</C.Button> : <C.Esgotado>Produto esgotado</C.Esgotado>}
                            <C.Button>Adicionar a lista de desejos</C.Button>
                        </C.Wrapper>
                    </C.Divider>
                </C.InformationWrapper>
            </C.InformationContainer>
        </C.Section>
    )
}

export default Item;