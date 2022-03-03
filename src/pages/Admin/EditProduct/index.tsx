import { useProduct } from "../../../context/productContext";
import { Container } from "./styles";

const EditProduct: React.FC = () => {
    const { products } = useProduct()

    return (
        <Container>
            {products.map((product, index) => <span key={index}>Teste</span>)}
        </Container>
    )
}

export default EditProduct;

//Editar informações básicas
//Deletar Produto
//Informações importantes CONDITIONS, colocar acesso rapido, sem precisar entrar na página do produto pra editar: isAvailable, Display, isNew, hasDiscount, genders
//N vai poder adicionar ou deletar imagem, só mudar o thumb
