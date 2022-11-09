import Avatar from "components/user/components/avatar/Avatar";
import Name from "components/user/components/name/Name";
import { createConversation } from "api/firebase/createConversation";
import "./style.scss"
import { useSelector } from "react-redux";

//----------------------------------------------------------------

export default function SearchResult({ searchedUser, setSearchedUser }) {
    const { user } = useSelector(state => state.loggedUser)
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
