import { snapshotMessages } from "api/firebase/snapshotMessages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "./components/message/Message";
import "./style.scss"

//----------------------------------------------------------------

export default function Messages() {
    const [messages, setMessages] = useState([])
    const activeChat = useSelector(state => state.activeChat)

    // console.dir(messages[0].date.toDate());

    useEffect(() => {
        activeChat.chatId && snapshotMessages(activeChat, setMessages)
    }, [activeChat.chatId])

    return (
        <div className="messages">
            {messages.map((item) => (
                <Message
                    key={item.id}
                    messageData={item}
                    messageTime={item.date.toDate()}
                    messageClass={
                        activeChat.searchedUser.uid === item.senderId ?
                            "message userMessage" :
                            "message receivedMessage"
                    }
                />
            ))}
        </div>
    )
};