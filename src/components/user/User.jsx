import LogoutButton from "components/buttons/logout/LogoutButton";
import { useSelector } from "react-redux";
import Avatar from "./components/avatar/Avatar";
import Name from "./components/name/Name";
import "./style.scss"

//---------------------------------------------------------

export default function User() {
    const { user } = useSelector(state => state.loggedUser)

    return (
        <div className="user">
            <Avatar photoUrl={user.photoURL} />
            <Name userName={user.name} />
            <LogoutButton />
        </div>
    )
};
