import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { Product } from "../../../types/product";
import { UserData } from "../../../types/user";
import { removeFavProduct } from "../../../services/user";
import * as C from "./styles";

type Props = {
    currentUserData: UserData | null
}

const Favorites: React.FC<Props> = ({ currentUserData }) => {
    const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([])
    const { products } = useProduct()

    useEffect(() => {
        if(products && currentUserData) {
            setFavoriteProducts(products.filter(product => {
                if(currentUserData.favorites.includes(product.id)) return product
                else return null
            }))
        }
    }, [products, currentUserData])

    async function handleDeleteFavorite(productId: string | undefined) {
        if(currentUserData?.id !== undefined && productId !== undefined) {
            try {
                await removeFavProduct(currentUserData.id, productId)
            } catch(err) {
                console.log(err)
            }
        }
    }

    return (
        <C.Container>
            <C.Wrapper>
                {favoriteProducts.length === 0 ? <div>Você não possui nenhum item salvo</div> : 
                    favoriteProducts.map((product, key) => (
                        <C.Frame key={key} orderStatus={key % 2 === 0 ? true : false}>
                            <C.Number>{key + 1}</C.Number>
                            <Link to={`/product/${product.id}`} key={key} style={{height: '90%'}}>
                                <C.Image url={product.imageThumb}/>
                            </Link>
                            <C.Description>
                                <C.InfoWrapper>
                                    <C.Name>{product.name}</C.Name>
                                    <C.Category>{product.category} {product?.collection}</C.Category>
                                </C.InfoWrapper>
                                <C.Delete onClick={() => handleDeleteFavorite(product.id)}>REMOVE</C.Delete>
                            </C.Description>
                        </C.Frame>
                    ))
                }
            </C.Wrapper>    
        </C.Container>
    )
}

export default Favorites;