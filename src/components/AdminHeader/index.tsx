import { Link } from "react-router-dom";
import { Button, Container, Wrapper } from "./styles";

const AdminHeader: React.FC = () => {

    return(
        <Container>
            <Wrapper>
                <Link to={"/admin"}>
                    <Button>myAdmin</Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default AdminHeader;