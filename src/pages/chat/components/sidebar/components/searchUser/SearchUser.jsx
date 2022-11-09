import { useForm } from "react-hook-form";
import SearchResult from "./components/searchResult/SearchResult";
import { useState } from "react";
import searchUser from "api/firebase/searchUser";
import "./style.scss"

//----------------------------------------------------------------

export default function SearchUser() {
    const [searchedUser, setSearchedUser] = useState()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        searchUser(data, setSearchedUser);
        reset()
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
