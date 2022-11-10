import { getChatsList } from "api/firebase/getChatList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chat from "./components/chat/Chat";
import "./style.scss"

//----------------------------------------------------------------

export default function Chats() {
    const { user } = useSelector(state => state.loggedUser)
    const [chatsList, setChatsList] = useState([])

    useEffect(() => {
        user.uid && getChatsList(setChatsList, user)
    }, [user.uid])

    return (
        <ul className="chats-list">
            {Object.entries(chatsList)?.map((item) => (<Chat key={item[0]} data={item[1]} />))}
        </ul>
    )
};