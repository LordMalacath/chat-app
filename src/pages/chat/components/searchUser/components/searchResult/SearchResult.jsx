import Avatar from "components/user/components/avatar/Avatar";
import Name from "components/user/components/name/Name";
import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";
import { createConversation } from "api/firebase/createConversation";
import "./style.scss"

//----------------------------------------------------------------

export default function SearchResult({ searchedUser, setSearchedUser }) {
    const { user } = useContext(AuthContext)
    const handleClick = () => {
        createConversation(user, searchedUser);
        setSearchedUser("")
    }
    return (
        <div className="searchResult" onClick={handleClick}>
            <Avatar photoUrl={searchedUser.photoURL} />
            <Name userName={searchedUser.name} />
        </div>
    )
};
