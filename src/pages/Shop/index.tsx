import { useProduct } from "../../context/productContext";
import { Section, Container } from "./styles"

const Shop: React.FC = () => { 
    const { products } = useProduct()

    return (
        <Section>
            <Container>
                <div>HEADER</div>
                <div>PRODUCTS</div>
            </Container>
        </Section>
    )
}

export default Shop;