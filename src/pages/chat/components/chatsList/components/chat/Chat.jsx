import Avatar from "components/user/components/avatar/Avatar";
import Name from "components/user/components/name/Name";
import { ChatContext } from "contexts/ChatContext";
import { useContext } from "react"
import LastMessage from "./components/lastMessage/LastMessage";
import "./style.scss"

//----------------------------------------------------------------

export default function Chat({ data }) {
    const { dispatch } = useContext(ChatContext)
    const handleClick = (userData) => {
        dispatch({
            type: "CHANGE_USER",
            payload: userData,
        })
    }

    return (
        <li className={'chat'}
            onClick={() => handleClick(data.userInfo)}
        >
            <Avatar photoUrl={data.userInfo.photoURL} />
            <Name userName={data.userInfo.name} />
            <LastMessage lastMessage={data.lastMessage?.message} />
        </li>
    )
}