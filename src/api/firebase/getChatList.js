import { doc, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"

//----------------------------------------------------------------

export function getChatsList(setChatsList, user) {
    const unsub = onSnapshot(doc(db, "user-chats", user.uid), (doc) => {
        setChatsList(doc.data())
    })
    return () => {
        unsub()
    }
}
