import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";
import * as C from "./styles"

const Cart: React.FC = () => {
    const [aviso, setAviso] = useState<string>("")
    const { cart, totalPrice, deleteCart, quantityCart } = useCart()
    const { currentUserData } = useUser()
    const navigate = useNavigate()

    function checksUser() {
        setAviso("")
        if(currentUserData) {
            if(currentUserData.canBuy === true) {
                navigate("/payment")
            } else {
                setAviso("Preencha todos os dados na sua página de usuário para continuar")
            }
        } else {
            navigate("/login")
        }
    }

    return (
        <>
            <C.Section>
                <C.Quantity>{cart.length}</C.Quantity>
                <C.Aviso>{aviso}</C.Aviso>
                <C.Container>
                    {cart.length === 0 ? '' : 
                        cart.map((cartItem, key) => (
                            <C.Wrapper key={key} isLast={key === cart.length - 1 ? true : false}>
                                <C.Image url={cartItem.product.imageThumb}/>
                                <C.Information>
                                    <C.BasicInformation>
                                        <C.Name>{cartItem.product.name}</C.Name>
                                        <C.Span>Size: {cartItem.size}</C.Span>
                                        <C.Span>Color: {cartItem.color}</C.Span>
                                    </C.BasicInformation>
                                    <C.Delete onClick={() => deleteCart(cartItem.cartId)}>REMOVE</C.Delete>
                                    <C.FunctionalInformation>
                                        <C.Operations>
                                            <C.Button onClick={() => quantityCart("soma", cartItem.cartId)}>+</C.Button>
                                            <C.Span>{cartItem.quantity}</C.Span>
                                            <C.Button onClick={() => quantityCart("subtracao", cartItem.cartId)}>-</C.Button>
                                        </C.Operations>
                                        <C.Price>R$ {cartItem.quantity * (cartItem.product.conditions.hasDiscount ? cartItem.product.pricing.discountPrice : cartItem.product.pricing.price)}.00</C.Price>
                                    </C.FunctionalInformation>
                                </C.Information>
                            </C.Wrapper>
                        ))
                    }
                </C.Container>
            </C.Section>
            <C.CheckoutSticky>
                <C.CheckoutPanel>
                    {cart.length === 0 ? <C.CheckoutSpan>Seu carrinho está vazio</C.CheckoutSpan> : 
                        <C.CheckoutContainer>
                            <C.CheckoutSpan>Total: R${totalPrice}</C.CheckoutSpan>
                            <C.Checkout onClick={checksUser}>Finalizar compra</C.Checkout>
                        </C.CheckoutContainer>
                    }
                </C.CheckoutPanel>
            </C.CheckoutSticky>
        </>
    )
}

export default Cart;