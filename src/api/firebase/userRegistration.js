import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { uploadAvatar } from "api/firebase/uploadAvatar";
import { auth, db } from "./firebase";

//---------------------------------------------------------

const userRegistration = async (data) => {

    try {
        //creating user auth
        const user = await createUserWithEmailAndPassword(auth, data.email, data.password);

        //uploaduin user avatar and resolving url
        const photoURL = await uploadAvatar(data, user);

        //updating user info with name and avatar url
        await updateProfile(
            auth.currentUser,
            {
                displayName: data.name,
                photoURL,
            }
        );

        //create user file
        const updatedUser = auth.currentUser;
        await setDoc(doc(db, "users", updatedUser.uid),
            {
                name: updatedUser.displayName,
                uid: updatedUser.uid,
                email: updatedUser.email,
                photoURL,
            }
        );

        //creating user-cahts folder for user
        await setDoc(doc(db, "user-chats", updatedUser.uid),
            {}
        );
    } catch (error) {
        console.log("Registration => ", error);
    }
}

export default userRegistration;