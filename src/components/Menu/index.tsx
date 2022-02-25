import { Button, Container, Footer, Navigation, Section, Sticky, Span } from "./styles";

const Menu: React.FC = () => {
    return (
        <Sticky>
            <Section>
                <Container>
                    <Navigation>
                        <Button>CAMISETAS</Button>
                        <Button>COLECIONADOR</Button>
                        <Button>TRICOT</Button>
                        <Button>ACESSÓRIOS</Button>
                    </Navigation>
                    <Footer>
                        <Span>Sobre</Span>
                        <Span>Instagram</Span>
                        <Span>Contato</Span>
                    </Footer>
                </Container>
            </Section>
        </Sticky>
    )
}

export default Menu;