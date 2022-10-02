import { useForm } from "react-hook-form"
import imageUpload from "img/icons/icons8-add-image-48.png"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore";
import { uploadAvatar } from "./uploadAvatar";
import { auth, db } from "api/firebase/firebase";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
    const redirect = useNavigate()
    const { register, handleSubmit } = useForm();
    const [updateProfile] = useUpdateProfile(auth);

    const onSubmit = async (data) => {

        const user = await createUserWithEmailAndPassword(auth, data.email, data.password);

        const photoURL = await uploadAvatar(data, user);

        await updateProfile(
            {
                displayName: data.name,
                photoURL: photoURL,
            }
        )

        const updatedUser = auth.currentUser;

        await setDoc(doc(db, "users", updatedUser.uid),
            {
                name: updatedUser.displayName,
                uid: updatedUser.uid,
                email: updatedUser.email,
                photoURL: photoURL,
            }
        )

        await setDoc(doc(db, "user-chats", updatedUser.uid),
            {}
        )
        redirect("/")
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="password" placeholder="Password" {...register("password", { required: true, min: 8, maxLength: 50 })} />
            <input type="file" id='file' accept="image/png, image/jpeg" {...register("avatar")} />
            <label htmlFor='file' className='formFile'>
                <img src={imageUpload} alt='img' />
                <span>Add an avatar</span>
            </label>
            <button type="submit">Register</button>
        </form>
    )
};
