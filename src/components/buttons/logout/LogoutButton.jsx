import { auth } from "api/firebase/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import "./style.scss"

//----------------------------------------------------------------

export default function LogoutButton() {
    const redirect = useNavigate()
    const handleClick = () => {
        signOut(auth);
        redirect("/login")
    }
    return <button onClick={handleClick} className="logOut">Log Out</button>
};
