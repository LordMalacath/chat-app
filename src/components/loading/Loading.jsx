import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'api/firebase/firebase';
import Spinner from 'components/spinner/Spinner';
import { Navigate } from 'react-router-dom';
import ChatApp from 'pages/chat/ChatApp';

//---------------------------------------------------------

export default function Loading() {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <Navigate to="/login" />
    }
    if (user) {
        return <ChatApp />
    }
};
