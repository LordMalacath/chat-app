import User from "components/user/User";
import SearchUser from "./components/searchUser/SearchUser";
import ChatsList from "./components/chatsList/ChatsList"
import "./style.scss"

//---------------------------------------------------------

export default function Sidebar() {
    return (
        <div className="side">
            <User />
            <SearchUser />
            <ChatsList />
        </div>
    )
};
