import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./store/UsersReducer";
import CoursesReducer from "./store/CoursesReducer";
import ArticlesReducer from "./store/ArticlesReducer";


export default configureStore({
    reducer:{
       users: UsersReducer,
       courses: CoursesReducer,
       articles:ArticlesReducer
    }
})


