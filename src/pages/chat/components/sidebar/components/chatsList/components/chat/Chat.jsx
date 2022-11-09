import Avatar from "components/user/components/avatar/Avatar";
import Name from "components/user/components/name/Name";
import { useDispatch, useSelector } from "react-redux";
import { setActiveChat } from "redux/slice/chatSlice";
import LastMessage from "./components/lastMessage/LastMessage";
import "./style.scss"

//----------------------------------------------------------------

export default function Chat({ data }) {
    const { user } = useSelector(state => state.loggedUser)
    const dispatch = useDispatch()

    const handleClick = (searchedUserInfo) => {
        dispatch(setActiveChat({ searchedUserInfo, user}))
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