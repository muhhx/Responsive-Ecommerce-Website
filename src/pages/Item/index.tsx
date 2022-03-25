import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useProduct } from "../../context/productContext";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";

import { addFavProduct } from "../../services/user";
import { Product } from "../../types/product";
import * as C from "./styles";

const Item: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const [currentColor, setCurrentColor] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<string>("")

    const [error, setError] = useState<string | null>(null)

    const { currentUserData } = useUser()
    const { products } = useProduct()
    const { addCart } = useCart()
    const location = useLocation()
    const navigate = useNavigate()
    
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

    async function handleAddFav() {
        if(currentUserData && currentUserData?.id && currentProduct?.id) {
            try {
                setError(null)
                await addFavProduct(currentUserData.id, currentProduct.id)
                navigate("/user")
            } catch(err) {
                setError("Não foi possível adicionar o produto ao seus favoritos")
            }
        } else
            navigate("/login")
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
                        {currentProduct?.conditions.isNew ? <C.Category>NOVO</C.Category> : <C.Category>{currentProduct?.category}</C.Category>}
                        <C.Title>{currentProduct?.name}</C.Title>
                        <C.Description>{currentProduct?.description}</C.Description>
                    </C.Divider>
                    {error ? <C.Category>{error}</C.Category> : ''}
                    <C.Wrapper>
                        <C.Price hasDiscount={currentProduct?.conditions.hasDiscount ? true : false}>R$ {currentProduct?.pricing.price},00</C.Price>
                        {currentProduct?.conditions.hasDiscount ? <C.Discount>R$ {currentProduct.pricing.discountPrice},00</C.Discount> : ''}
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
                    {!currentProduct?.display ? '' :
                        <C.Divider>
                            <C.Wrapper>
                                {currentProduct?.conditions.isAvailable ? <C.Button onClick={handleAddCart}>Adicionar ao carrinho</C.Button> : <C.Esgotado>Produto esgotado</C.Esgotado>}
                                <C.Button onClick={handleAddFav}>Adicionar a lista de desejos</C.Button>
                            </C.Wrapper>
                        </C.Divider>
                    }
                </C.InformationWrapper>
            </C.InformationContainer>
        </C.Section>
    )
}

export default Item;