import { useMenu } from "../../context/menuContext";
import { Link } from "react-router-dom";
import { Button, Container, Footer, Navigation, Section, Sticky, Span } from "./styles";

const Menu: React.FC = () => {
    const { setIsOpen } = useMenu()

    function handlePageChange() {
        setIsOpen(false)
    }

    return (
        <Sticky>
            <Section>
                <Container>
                    <Navigation>
                        <Link to={"/shop"}>
                            <Button onClick={handlePageChange}>SHOP</Button>
                        </Link>
                        <Button onClick={handlePageChange}>COLLECTIONS</Button>
                        <Button onClick={handlePageChange}>EXCLUSIVE</Button>
                        <Button onClick={handlePageChange}>VANILLA WORLD</Button>
                    </Navigation>
                    <Footer>
                        <Span>Termos</Span>
                        <Span>Instagram</Span>
                        <Span>Contato</Span>
                    </Footer>
                </Container>
            </Section>
        </Sticky>
    )
}

export default Menu;