import { useState } from "react";
import { handleSignUp } from "../../config/firebase";
import { handleAdd } from "../../config/firebase"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Register: React.FC = () => {
    const [inputPassword, setInputPassword] = useState<string>("")
    const [inputConfirm, setInputConfirm] = useState<string>("")
    const [inputEmail, setInputEmail] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    function resetInput() {
        setInputEmail("")
        setInputPassword("")
        setInputConfirm("")
    }

    async function handleSubmit(e: React.MouseEvent) {
        e.preventDefault()

        if(inputEmail.length === 0 || inputPassword.length === 0 || inputConfirm.length === 0) {
            return setError("Preencha todos os campos.")
        }

        if(inputPassword.length < 6) {
            return setError("A senha precisa ter no mínimo seis caracteres.")
        }
        
        if(inputPassword !== inputConfirm) {
            return setError("As senhas não são iguais.")
        }

        try {
            setError(null)
            await handleSignUp(inputEmail, inputPassword)
            await handleAdd("users", { email: inputEmail, canBuy: false, timestamp: new Date() })
            resetInput()
            navigate("/user")
        } catch {
            return setError("Não foi possível criar sua conta. Verifique os campos digitados!")
        }

    }

    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>SIGNUP</Title>
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

                        <InputWrapper>
                            <Span>Confirmar senha</Span>
                            <InputArea>
                                <Input type="password" onChange={(e) => setInputConfirm(e.target.value)} value={inputConfirm}/>
                            </InputArea>
                        </InputWrapper>

                        <Button onClick={(e) => handleSubmit(e)}>Registrar</Button>
                    </Form>
                    <OptionsWrapper>
                    <Link to={"/reset"}>
                            <Option>Esqueceu a senha?</Option>
                        </Link>
                        <Link to={"/login"}>
                            <Option>Fazer login</Option>
                        </Link>
                    </OptionsWrapper>
                </FormWrapper>
            </Container>
        </Section>
    )
}

export default Register;