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
            <h1>Current Account: {currentUserData?.email}</h1>
            {currentUserData?.canBuy ? '' : <div>Preencha todas as informações para finalizar compra</div>}
            <C.Button onClick={handleLogout}>Signout</C.Button>
        </C.Container>
    )
}

export default Account;