import ChatBox from './components/chatBox/ChatBox';
import ChatsList from './components/chatsList/ChatsList';
import User from '../../components/user/User';
import SearchUser from './components/searchUser/SearchUser';

//---------------------------------------------------------

export default function ChatApp() {

    return (
        <div className='wrapper'>
            <div className="chat-container">
                <div className="side">
                    <User />
                    <SearchUser />
                    <ChatsList />
                </div>
                <ChatBox />
            </div>
        </div>
    )

};
