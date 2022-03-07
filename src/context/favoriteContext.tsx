import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../types/product";
import { Props } from "../types/contexts";

import { useProduct } from "../context/productContext";
import { useUser } from "../context/userContext";

type Values = {
    favorites: Product[]
}

const initialValues = {
    favorites: []
}

const FavoriteContext = createContext<Values>(initialValues)

export const useFavorite = () => {
    return useContext(FavoriteContext)
}

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
    const [favorites, setFavorites] = useState<Product[]>(initialValues.favorites)
    const { products } = useProduct()
    const { currentUserData } = useUser()

    useEffect(() => {
        if(products && currentUserData) {
            setFavorites(products.filter(product => {
                if(currentUserData.favorites.includes(product.id)) return product
                else return null
            }))
        }
    }, [products, currentUserData])

    return (
        <FavoriteContext.Provider value={{favorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}

//fazer todas as operações de adicionar e deletar favs no estado e setFavorites.
//useEffect = toda vez q tem alteração no estado de setFavorites, atualizar no bd