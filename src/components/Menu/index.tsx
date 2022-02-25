import { Button, Container, Section, Sticky, Wrapper } from "./styles";

const Menu: React.FC = () => {
    return (
        <Sticky>
            <Section>
                <Container>
                    <Wrapper>
                        <Button>NEW</Button> / 
                        <Button>CAMISETAS</Button>
                    </Wrapper>
                    <Button>COLECIONADOR</Button>
                    <Wrapper>
                        <Button>TRICOT</Button> / 
                        <Button>ACESSÓRIOS</Button>
                    </Wrapper>
                    <Button>SOBRE</Button>
                </Container>    
            </Section>
        </Sticky>
    )
}

export default Menu;