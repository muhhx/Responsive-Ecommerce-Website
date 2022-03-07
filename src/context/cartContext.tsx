import { createContext, useContext, useState, useEffect } from "react";
import { CartProduct } from "../types/product";
import { Product } from "../types/product";
import { Props } from "../types/contexts";

type Cart = {
    cart: CartProduct[];
    totalPrice: number;
    addCart: (product: Product, color: string, size: string) => void;
    deleteCart: (productId: number) => void;
    quantityCart: (operation: string, productId: number) => void;
}

const initialValue = {
    cart: [],
    totalPrice: 0,
    addCart: () => {},
    deleteCart: () => {},
    quantityCart: () => {}
}

const CartContext = createContext<Cart>(initialValue)

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider: React.FC<Props> = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState<number>(initialValue.totalPrice)
    const [cart, setCart] = useState<CartProduct[]>(initialValue.cart)
    const [update, setUpdate] = useState<number>(0)

    function addCart(product: Product, color: string, size: string) {
        const productObject: CartProduct = {
            product,
            color,
            size,
            quantity: 1,
            cartId: Math.random()
        }

        if(cart.length === 0) {
            setCart([productObject])
            setTotalPrice(product.conditions.hasDiscount ? product.pricing.discountPrice : product.pricing.price)
        } else {
            let contador = 0
            cart.forEach(cartProduct => {
                if(cartProduct.product.id === product.id && cartProduct.color === color && cartProduct.size === size) {
                    setTotalPrice(totalPrice + (cartProduct.product.conditions.hasDiscount ? cartProduct.product.pricing.discountPrice : cartProduct.product.pricing.price ))
                    return cartProduct.quantity++
                }
                contador++
            })
            if(contador === cart.length) {
                setCart([...cart, productObject])
                setTotalPrice(totalPrice + (product.conditions.hasDiscount ? product.pricing.discountPrice : product.pricing.price))
            }
        }

        setUpdate(update + 1)
    }

    function deleteCart(productId: number) {
        const resultCart = cart.filter(cartItem => cartItem.cartId !== productId)
        setCart(resultCart)
        cart.map(cartItem => {
            if(cartItem.cartId === productId) {
                const resultPrice = cartItem.quantity * (cartItem.product.conditions.hasDiscount ? cartItem.product.pricing.discountPrice : cartItem.product.pricing.price)
                setTotalPrice(totalPrice - resultPrice)
            }
        })
        setUpdate(update + 1)
    }

    function quantityCart(operation: string, productId: number) {
        if(operation === "soma") {
            cart.map(cartItem => {
                if(cartItem.cartId === productId) {
                    cartItem.quantity++
                    setTotalPrice(totalPrice + (cartItem.product.conditions.hasDiscount ? cartItem.product.pricing.discountPrice : cartItem.product.pricing.price))
                }
            })
        } else {
            cart.map(cartItem => {
                if(cartItem.cartId === productId && cartItem.quantity > 1) {
                    cartItem.quantity--
                    setTotalPrice(totalPrice - (cartItem.product.conditions.hasDiscount ? cartItem.product.pricing.discountPrice : cartItem.product.pricing.price))
                }
            })
        }
        setUpdate(update + 1)
    }

    return (
        <CartContext.Provider value={{cart, totalPrice, addCart, deleteCart, quantityCart}}>
            {children}
        </CartContext.Provider>
    )
}