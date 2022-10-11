import { db } from "api/firebase/firebase";
import { AuthContext } from "contexts/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import "./style.scss"

//----------------------------------------------------------------

export default function Chats() {
    const { user } = useContext(AuthContext)
    const [chatsList, setChatsList] = useState([])

    useEffect(() => {
        function getChatsList() {
            const unsub = onSnapshot(doc(db, "user-chats", user.uid), (doc) => {
                setChatsList(doc.data())
            })
            return () => {
                unsub()
            }
        }
        user.uid && getChatsList()
    }, [user.uid])
    // console.log(chatsList);
    return (
        <ul className="chats-list">
            {Object.entries(chatsList)?.map((item) => (<Chat key={item[0]} data={item[1]} />))}
        </ul>
    )
};