import { useCart } from "../../context/cartContext";
import * as C from "./styles"

const Cart: React.FC = () => {
    const { cart } = useCart()
    console.log(cart)

    return (
        <C.Section>
            <C.Container>

            </C.Container>
        </C.Section>
    )
}

export default Cart;