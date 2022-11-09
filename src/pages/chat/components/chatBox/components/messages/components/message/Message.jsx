import { TIME } from "const/date/momentDate";
import "./style.scss"

//----------------------------------------------------------------

export default function Message({ messageData, messageTime, messageClass }) {
    return (
        <div className={messageClass} >
            <p>{messageData.message}</p>
            <span>{TIME(messageTime)}</span>
        </div>
    )
};
