import { useForm } from "react-hook-form"
import SendMessageButton from "components/buttons/sendMessageButton/SendMessageButton"
import { sendMessage } from "api/firebase/sendMessage"
import "./style.scss"
import { useSelector } from "react-redux"

//----------------------------------------------------------------

export default function TextArea() {
    const { user } = useSelector(state => state.loggedUser)
    const activeChat = useSelector(state => state.activeChat)
    // const { user } = useContext(AuthContext)
    // const { data } = useContext(ChatContext)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = ({ message }) => {
        sendMessage(user, activeChat, message)
        reset()
    }

    return (
        <form id="messageForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="sendFile"></div>
            <textarea placeholder="Message"{...register("message", { required: true, min: 2 })} />
            <div className="send">
                <SendMessageButton />
            </div>
        </form>
    )
};
