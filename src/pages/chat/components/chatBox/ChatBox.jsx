import Messages from "./components/messages/Messages";
import TextArea from "./components/textArea/TextArea";
import NavBar from "./navBar/NavBar";

export default function ChatBox() {
    return (
        <div className="chatBox">
            <NavBar />
            <Messages />
            <TextArea />
        </div>
    )
};
