import { useState } from "react";
import { handleReset } from "../../config/firebase";
import { Link } from "react-router-dom";
import { Container, FormWrapper, Section, Title, Form, Error, InputWrapper, InputArea, Input, Span, Button, OptionsWrapper, Option } from "./styles";

const Reset: React.FC = () => {
    const [inputEmail, setInputEmail] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: React.MouseEvent) {
        e.preventDefault()

        if(inputEmail.length === 0) {
            return setError("Preencha todos os campos.")
        }

        try {
            setError(null)
            await handleReset(inputEmail)
            setInputEmail("")
            setError("Email enviado, cheque seu inbox para mais instruções.")
        } catch {
            return setError("Não foi possível resetar sua senha. Verifique os campos digitados!")
        }
    }

    return (
        <Section>
            <Container>
                <FormWrapper>
                    <Title>RESET</Title>
                    {error !== null ? <Error>{error}</Error> : ""}
                    <Form>
                        <InputWrapper>
                            <Span>Email</Span>
                            <InputArea>
                                <Input type="text" onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
                            </InputArea>
                        </InputWrapper>

                        <Button onClick={(e) => handleSubmit(e)}>Reset</Button>
                    </Form>
                    <OptionsWrapper>
                        <Link to={"/login"}>
                            <Option>Fazer Login</Option>
                        </Link>
                        <Link to={"/register"}>
                            <Option>Registrar-se</Option>
                        </Link>
                    </OptionsWrapper>
                </FormWrapper>
            </Container>
        </Section>
    )
}

export default Reset;