import { createContext, useContext, useState } from "react";
import { Product } from "../types/product";
import { Props } from "../types/contexts";

type CartProduct = {
    product: Product,
    colorIndex: number,
    size: string,
    quantity: number,
    cartId: number
}

type Cart = {
    cart: CartProduct[];
    addCart: (product: Product, color: number, size: string) => void
}

const initialValue = {
    cart: [],
    addCart: () => {}
}

const CartContext = createContext<Cart>(initialValue)

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<CartProduct[]>(initialValue.cart)

    function addCart(product: Product, color: number, size: string) {
        const productObject: CartProduct = {
            product,
            colorIndex: color,
            size,
            quantity: 1,
            cartId: Math.random()
        }

        if(cart.length === 0)
            setCart([productObject])
        else {
            let contador = 0
            cart.forEach(cartProduct => {
                if(cartProduct.product.id === product.id && cartProduct.colorIndex === color && cartProduct.size === size) {
                    return cartProduct.quantity++
                }
                contador++
            })
            if(contador === cart.length)
                setCart([...cart, productObject])
        }
    }

    return (
        <CartContext.Provider value={{cart, addCart}}>
            {children}
        </CartContext.Provider>
    )
}