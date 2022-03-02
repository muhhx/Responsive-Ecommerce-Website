import { useProduct } from "../../../context/productContext";
import { Container } from "./styles";

const EditProduct: React.FC = () => {
    const { products } = useProduct()

    return (
        <Container>
            {products.map(product => <span>Teste</span>)}
        </Container>
    )
}

export default EditProduct;