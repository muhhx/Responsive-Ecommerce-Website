import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Login: React.FC = () => {
    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>LOGIN</Title>
                    {/* <Error>Mensagem de erro</Error> */}
                    <Form>
                        <InputWrapper>
                            <Span>Email</Span>
                            <InputArea>
                                <Input />
                            </InputArea>
                        </InputWrapper>
                        <InputWrapper>
                            <Span>Senha</Span>
                            <InputArea>
                                <Input />
                            </InputArea>
                        </InputWrapper>
                        <Button>Entrar</Button>
                    </Form>
                    <OptionsWrapper>
                        <Option>Esqueceu a senha?</Option>
                        <Option>Registrar-se</Option>
                    </OptionsWrapper>
                </FormWrapper>
            </Container>
        </Section>
    )
}

export default Login;