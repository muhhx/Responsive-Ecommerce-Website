import { Link } from "react-router-dom";
import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Register: React.FC = () => {

    function handleSubmit(e: React.MouseEvent) {
        e.preventDefault()
    }

    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>SIGNUP</Title>
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
                        <InputWrapper>
                            <Span>Confirmar senha</Span>
                            <InputArea>
                                <Input type="password"/>
                            </InputArea>
                        </InputWrapper>
                        <Button onClick={(e) => handleSubmit(e)}>Registrar</Button>
                    </Form>
                    <OptionsWrapper>
                        <Link to={"/login"}>
                            <Option>Ja possuo uma conta</Option>
                        </Link>
                    </OptionsWrapper>
                </FormWrapper>
            </Container>
        </Section>
    )
}

export default Register;