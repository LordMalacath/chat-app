import { storage } from "api/firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadAvatar = async (data, { user }) => {
    const storageRef = ref(storage, `Avatars/${user.uid}`);
    const url = await uploadBytesResumable(storageRef, data.avatar[0])
        .then((response) => getDownloadURL(response.ref))
        .then((result) => { return result })
    return url
}
