import { Link } from "react-router-dom";
import * as C from "./styles"

const Error: React.FC = () => {
    return (
        <C.Section>
            <C.Container>
                <C.Wrapper>
                    <C.Title>404</C.Title>
                    <C.Error>Error</C.Error>
                </C.Wrapper>
                <C.Wrapper>
                    <C.WrapperMessage>
                        <C.Message>Sorry :(</C.Message>
                        <C.Message>Page Not Found</C.Message>
                    </C.WrapperMessage>
                    <C.WrapperMessage>
                        <Link to={"/"}>
                            <C.Button>HOME PAGE</C.Button>
                        </Link>
                    </C.WrapperMessage>
                </C.Wrapper>
            </C.Container>
        </C.Section>
    )
}

export default Error;