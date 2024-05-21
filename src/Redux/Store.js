import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./store/UsersReducer";


export default configureStore({
    reducer:{
       users: UsersReducer
    }
})


