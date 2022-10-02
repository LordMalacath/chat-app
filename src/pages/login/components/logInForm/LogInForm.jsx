import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "api/firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
    const redirect = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            redirect("/")
        } catch (error) {
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="password" placeholder="Password" {...register("password", { required: true, min: 8, maxLength: 50, })} />
            <button type="submit">Login</button>
        </form>
    )
};
