import { doc, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"

//----------------------------------------------------------------

export function snapshotMessages(activeChat, setMessages) {
    const unsub = onSnapshot(doc(db, "chats", activeChat.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
        unsub()
    }
}