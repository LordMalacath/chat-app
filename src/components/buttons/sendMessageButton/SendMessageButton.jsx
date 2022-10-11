import sendIcon from "img/icons/icons8-email-send-64.png"
import "./style.scss"

//----------------------------------------------------------------

export default function SendMessageButton() {
    return (
        <button type="submit" >
            <img src={sendIcon} alt="send" />
            <span>Send</span>
        </button>
    )
};
