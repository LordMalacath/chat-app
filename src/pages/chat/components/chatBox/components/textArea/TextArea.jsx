import { useForm } from "react-hook-form"
import { AuthContext } from "contexts/AuthContext"
import { ChatContext } from "contexts/ChatContext"
import { useContext } from "react"
import SendMessageButton from "./components/sendMessageButton/SendMessageButton"
import { sendMessage } from "./sendMessage"


export default function TextArea() {
    const { user } = useContext(AuthContext)
    const { data } = useContext(ChatContext)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = ({ message }) => {
        sendMessage(user, data, message)
        reset()
    }

    return (
        <form id="messageForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="sendFile"></div>
            <textarea placeholder="Message"{...register("message", { required: true, min: 2, maxLength: 80 })} />
            <div className="send">
                <SendMessageButton />
            </div>
        </form>
    )
};
