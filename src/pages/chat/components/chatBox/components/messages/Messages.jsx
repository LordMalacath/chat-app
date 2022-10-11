import { db } from "api/firebase/firebase";
import { ChatContext } from "contexts/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Message from "./components/message/Message";
import "./style.scss"

//----------------------------------------------------------------

export default function Messages() {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => { unsub() }

    }, [data.chatId])

    return (
        <div className="messages">
            {messages.map((item) => (
                <Message
                    key={item.id}
                    messageData={item}
                    messageClass={
                        data.user.uid === item.senderId ?
                            "message userMessage" :
                            "message receivedMessage"
                    }
                />
            ))}
        </div>
    )
};