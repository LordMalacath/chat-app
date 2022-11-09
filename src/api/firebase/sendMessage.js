import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "api/firebase/firebase"
import { v4 as createId } from "uuid"



export const sendMessage = async (user, data, message) => {
    const chat = doc(db, "chats", data.chatId)
    try {

        await updateDoc(chat, {
            messages: arrayUnion({
                id: createId(),
                message: message,
                senderId: user.uid,
                date: Timestamp.now()
            })
        })

        await updateDoc(doc(db, "user-chats", user.uid), {
            [data.chatId + ".lastMessage"]: { message },
            [data.chatId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "user-chats", data.searchedUser.uid), {
            [data.chatId + ".lastMessage"]: { message },
            [data.chatId + ".date"]: serverTimestamp()
        })

    } catch (error) {
        console.log("Send message=> ", error);
    }
};
