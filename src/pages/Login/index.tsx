import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogIn } from "../../config/firebase";
import { Link } from "react-router-dom";
import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Login: React.FC = () => {
    const [inputPassword, setInputPassword] = useState<string>("")
    const [inputEmail, setInputEmail] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    function resetInput() {
        setInputEmail("")
        setInputPassword("")
    }

    async function handleSubmit(e: React.MouseEvent) {
        e.preventDefault()

        if(inputEmail.length === 0 || inputPassword.length === 0) {
            return setError("Preencha todos os campos.")
        }

        try {
            setError(null)
            await handleLogIn(inputEmail, inputPassword)
            resetInput()
            navigate("/user")
        } catch {
            return setError("Não foi possível logar sua conta. Verifique os campos digitados!")
        }
    }

    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>LOGIN</Title>
                    {error !== null ? <Error>{error}</Error> : ""}
                    <Form>
                        <InputWrapper>
                            <Span>Email</Span>
                            <InputArea>
                                <Input type="text" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
                            </InputArea>
                        </InputWrapper>

                        <InputWrapper>
                            <Span>Senha</Span>
                            <InputArea>
                                <Input type="password" onChange={(e) => setInputPassword(e.target.value)} value={inputPassword}/>
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