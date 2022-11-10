import ChatBox from './components/chatBox/ChatBox';
import Sidebar from './components/sidebar/Sidebar';
import "./style.scss"

//----------------------------------------------------------------

export default function ChatApp() {

    return (
        <div className='wrapper'>
            <div className="chat-container">
                <Sidebar/>
                <ChatBox />
            </div>
        </div>
    )

};
