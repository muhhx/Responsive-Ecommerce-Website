import { useMenu } from "../../context/menuContext";
import { useTheme } from "../../context/themeContext";
import { headerAssets } from "./data";
import { Button, Container, Icon, Menu, Section, Span, Wrapper } from "./styles"

const Header: React.FC = () => {
    const { isLight, setIsLight } = useTheme()
    const { isOpen, setIsOpen } = useMenu()

    function handleTheme() {
        setIsLight(isLight === true ? false : true)
    }

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
                    <Button onClick={handleTheme}>
                        <Icon src={isLight ? headerAssets.darkMode : headerAssets.lightMode} alt={headerAssets.modeAlt}/>
                    </Button>
                    <Button>
                        <Icon src={isLight ? headerAssets.userDark : headerAssets.userLight} alt={headerAssets.userAlt}/>
                    </Button>
                    <Span>{headerAssets.spanBag} 0.00</Span>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Header;
