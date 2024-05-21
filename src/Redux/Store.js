import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./store/UsersReducer";
import CoursesReducer from "./store/CoursesReducer";


export default configureStore({
    reducer:{
       users: UsersReducer,
       courses: CoursesReducer
    }
})


