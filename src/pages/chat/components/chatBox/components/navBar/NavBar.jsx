import CompanionUser from "./components/companionUser/CompanionUser";
import "./style.scss"
import { useSelector } from "react-redux";

//----------------------------------------------------------------

export default function NavBar() {
    const { searchedUser } = useSelector(state => state.activeChat)

    return (
        <nav>
            {
                searchedUser &&
                <CompanionUser user={searchedUser} />
            }
        </nav>
    )
};
