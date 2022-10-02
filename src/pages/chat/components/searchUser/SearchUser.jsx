import { useForm } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import SearchResult from "./components/searchResult/SearchResult";
import { db } from "api/firebase/firebase";
import { useState } from "react";

export default function SearchUser() {
    const [searchedUser, setSearchedUser] = useState()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("name", "==", data.search));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setSearchedUser(doc.data());
            });
            reset()
        } catch (error) {
        }
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'search'} {...register("search")} placeholder="Search for users" />
            </form>
            {
                searchedUser &&
                <SearchResult searchedUser={searchedUser} setSearchedUser={setSearchedUser} />
            }
        </div>
    )
};
