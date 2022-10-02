import { db } from "api/firebase/firebase";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

export const createConversation = async (user, searchedUser) => {
    const combinedUid = user.uid > searchedUser.uid
        ? user.uid + searchedUser.uid
        : searchedUser.uid + user.uid

    try {
        const response = await getDoc(doc(db, "users", combinedUid))

        if (!response.exists()) {
            await setDoc(doc(db, "chats", combinedUid), { messages: [] })

            await updateDoc(doc(db, "user-chats", user.uid), {
                [combinedUid + ".userInfo"]: {
                    name: searchedUser.name,
                    uid: searchedUser.uid,
                    photoURL: searchedUser.photoURL,
                },
                [combinedUid + ".date"]: {
                    timestamp: serverTimestamp()
                }
            });

            await updateDoc(doc(db, "user-chats", searchedUser.uid), {
                [combinedUid + ".userInfo"]: {
                    name: user.displayName,
                    uid: user.uid,
                    photoURL: user.photoURL,
                },
                [combinedUid + ".date"]: {
                    timestamp: serverTimestamp()
                }
            });
        }
    } catch (error) {
        console.log(error);
    }

}