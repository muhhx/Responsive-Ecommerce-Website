import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.png'
import { Section, Container, ImageWrapper, Image1, Image2, Image3, Image, Title, TitleText, SubTitle, Wrapper, Overlay, Span } from "./styles";

const Home: React.FC = () => {
    return (
        <Section>
            <Container>
                <Title>
                    <Wrapper>
                        <TitleText>LOOK</TitleText>
                        <SubTitle>Burberry Summer Collection.</SubTitle>
                    </Wrapper>
                    <Span>AW21</Span>
                    <TitleText>BOOK</TitleText>
                </Title>
                <ImageWrapper>
                    <Image1>
                        <Overlay />
                        <Image src={image1} alt='Teste' />
                    </Image1>
                    <Image2>
                        <Image src={image4} alt='Teste' />
                    </Image2>
                    <Image3>
                        <Image src={image3} alt='Teste' />
                    </Image3>
                </ImageWrapper>
            </Container>
        </Section>
    )
}

export default Home;