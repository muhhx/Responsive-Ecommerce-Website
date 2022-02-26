import { Link } from "react-router-dom";
import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Login: React.FC = () => {

    function handleSubmit(e: React.MouseEvent) {
        e.preventDefault()
    }

    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>LOGIN</Title>
                    <Error>Mensagem de erro</Error>
                    <Form>
                        <InputWrapper>
                            <Span>Email</Span>
                            <InputArea>
                                <Input type="text"/>
                            </InputArea>
                        </InputWrapper>
                        <InputWrapper>
                            <Span>Senha</Span>
                            <InputArea>
                                <Input type="password"/>
                            </InputArea>
                        </InputWrapper>
                        <Button onClick={(e) => handleSubmit(e)}>Entrar</Button>
                    </Form>
                    <OptionsWrapper>
                        <Option>Esqueceu a senha?</Option>
                        <Link to={"/register"}>
                            <Option>Registrar-se</Option>
                        </Link>
                    </OptionsWrapper>
                </FormWrapper>
            </Container>
        </Section>
    )
}

export default Login;