import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";


const searchUser = async (data, setSearchedUser) => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("name", "==", data.search));
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setSearchedUser(doc.data());
        });

    } catch (error) {
        console.log("Searching user => ", error);
    }
}

export default searchUser;