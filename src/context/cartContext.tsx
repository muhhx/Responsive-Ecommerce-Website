import { createContext, useContext, useState } from "react";
import { CartProduct } from "../types/product";
import { Product } from "../types/product";
import { Props } from "../types/contexts";

type Cart = {
    cart: CartProduct[];
    addCart: (product: Product, color: string, size: string) => void
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

    function addCart(product: Product, color: string, size: string) {
        const productObject: CartProduct = {
            product,
            color,
            size,
            quantity: 1,
            cartId: Math.random()
        }

        if(cart.length === 0)
            setCart([productObject])
        else {
            let contador = 0
            cart.forEach(cartProduct => {
                if(cartProduct.product.id === product.id && cartProduct.color === color && cartProduct.size === size) {
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