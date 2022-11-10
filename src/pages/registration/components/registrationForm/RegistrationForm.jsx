import { useForm } from "react-hook-form"
import imageUpload from "img/icons/icons8-add-image-48.png"
import { useNavigate } from "react-router-dom";
import userRegistration from "api/firebase/userRegistration";
import "./style.scss"

//----------------------------------------------------------------

export default function RegistrationForm() {
    const redirect = useNavigate()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await userRegistration(data)
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
