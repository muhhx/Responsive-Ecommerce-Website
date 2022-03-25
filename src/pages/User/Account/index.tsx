import { handleSignOut } from "../../../config/firebase"
import { UserData } from "../../../types/user"
import * as C from "./styles"

type Props = {
    currentUserData: UserData | null
}

const Account: React.FC<Props> = ({ currentUserData }) => {

    function handleLogout() {
        handleSignOut()
    }

    return (
        <C.Container>
            <C.Span>Current Account: {currentUserData?.email}</C.Span>
            {currentUserData?.canBuy ? '' : <C.Span>Dados</C.Span>}
            <C.Button onClick={handleLogout}>Signout</C.Button>
        </C.Container>
    )
}

export default Account;