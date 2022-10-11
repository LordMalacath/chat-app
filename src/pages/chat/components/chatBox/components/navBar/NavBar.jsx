import CompanionUser from "./components/companionUser/CompanionUser";
import { ChatContext } from "contexts/ChatContext";
import { useContext } from "react";
import "./style.scss"

//----------------------------------------------------------------

export default function NavBar() {
    const { data } = useContext(ChatContext);
    return (
        <nav>
            {
                data.user &&
                <CompanionUser user={data.user} />
            }
        </nav>
    )
};
