import { useMenu } from "../../context/menuContext";
import { headerAssets } from "./data";
import { Button, Container, Icon, Menu, Section, Span, Wrapper } from "./styles"

const Header: React.FC = () => {
    const { isOpen, setIsOpen } = useMenu()

    function handleMenu() {
        setIsOpen(isOpen === false ? true : false)
    }

    return (
        <Section>
            <Container>
                <Wrapper isMenu={true} onClick={handleMenu} >
                    <Menu />
                    <Span>{isOpen ? 'CLOSE' : 'SHOP'}</Span>
                </Wrapper>
                <Span>{headerAssets.spanLogo}</Span>
                <Wrapper isMenu={false}>
                    <Button>
                        <Icon src={headerAssets.iconSearch} alt={headerAssets.searchAlt}/>
                    </Button>
                    <Button>
                        <Icon src={headerAssets.iconUser} alt={headerAssets.userAlt}/>
                    </Button>
                    <Span>{headerAssets.spanBag} 0.00</Span>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Header;
