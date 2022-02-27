import { handleSignOut } from "../../config/firebase";
import { useUser } from "../../context/userContext";
import { Section, Button } from "./styles";

const User: React.FC = () => {
    const { currentUser } = useUser()

    function handleLogout() {
        handleSignOut()
    }

    return (
        <Section>
            <h1>Current Account: {currentUser?.email}</h1>
            <h1>UID: {currentUser?.uid}</h1>
            <Button onClick={handleLogout}>Signout</Button>
        </Section>
    )
}

export default User;