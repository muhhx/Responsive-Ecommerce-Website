import { createContext, useContext, useState, useEffect } from "react";
import { Props } from "../types/interfaces";
import { handleGet } from "../config/firebase";

interface Values {
    products: any[]
}

const initialValues = {
    products: []
}

const ProductContext = createContext<Values>(initialValues);

export const useProduct = () => {
    return useContext(ProductContext)
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<any[]>(initialValues.products)

    useEffect(() => {
        async function handleGetProducts () {
            const response = await handleGet("products")
            const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
            setProducts(data)
        }
        handleGetProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}