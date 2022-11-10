import { auth } from "api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "redux/slice/authSlice";

//---------------------------------------------------------

export function useSetLoggedUser() {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            user &&
                dispatch(setLoggedUser({
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                }))
        })
        return () => { unsub() }
    }, [])
};
