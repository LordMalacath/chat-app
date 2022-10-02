


export default function Message({ messageData, messageClass }) {

    return (
        <div className={messageClass} >
            <p>{messageData.message}</p>
            <span>10:55</span>
        </div>
    )
};
