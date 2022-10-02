import LogoutButton from "components/buttons/logout/LogoutButton";
import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";
import Avatar from "./components/avatar/Avatar";
import Name from "./components/name/Name";

//---------------------------------------------------------

export default function User() {
    const { user } = useContext(AuthContext)

    return (
        <div className="user">
            <Avatar photoUrl={user.photoURL} />
            <Name userName={user.displayName} />
            <LogoutButton />
        </div>
    )
};
