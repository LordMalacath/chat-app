import Messages from "./components/messages/Messages";
import MessageInput from "./components/messageInput/MessageInput";
import NavBar from "./components/navBar/NavBar";
import "./style.scss"

//----------------------------------------------------------------

export default function ChatBox() {
    return (
        <div className="chatBox">
            <NavBar />
            <Messages />
            <MessageInput />
        </div>
    )
};
