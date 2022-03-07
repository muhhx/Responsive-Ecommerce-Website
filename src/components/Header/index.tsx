import { Link } from 'react-router-dom';

import { useTheme } from "../../context/themeContext";
import { useMenu } from "../../context/menuContext";
import { useCart } from "../../context/cartContext";

import { headerAssets } from "./data";
import { Button, Container, Icon, Menu, Section, Span, Wrapper, LogoWrapper } from "./styles"

const Header: React.FC = () => {
    const { isLight, setIsLight } = useTheme()
    const { isOpen, setIsOpen } = useMenu()
    const { totalPrice } = useCart()

    function handleTheme() {
        setIsLight(isLight === true ? false : true)
    }

    function handleMenu() {
        setIsOpen(isOpen === false ? true : false)
    }

    function handlePageChange() {
        setIsOpen(false)
    }

    return (
        <Section>
            <Container>
                <Wrapper isMenu={true} onClick={handleMenu} >
                    <Menu />
                    <Span>{isOpen ? 'CLOSE' : 'SHOP'}</Span>
                </Wrapper>
                <LogoWrapper>
                    <Link to={"/"}>
                        <Span onClick={handlePageChange}>{headerAssets.spanLogo}</Span>
                    </Link>
                </LogoWrapper>
                <Wrapper isMenu={false}>
                    <Button onClick={handleTheme}>
                        <Icon src={isLight ? headerAssets.darkMode : headerAssets.lightMode} alt={headerAssets.modeAlt}/>
                    </Button>
                    <Button>
                        <Link to={"/user"} onClick={handlePageChange}>
                            <Icon src={isLight ? headerAssets.userDark : headerAssets.userLight} alt={headerAssets.userAlt}/>
                        </Link>
                    </Button>
                    <Link to={"/cart"}>
                        <Span onClick={handlePageChange}>{headerAssets.spanBag} {totalPrice}.00</Span>
                    </Link>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Header;
