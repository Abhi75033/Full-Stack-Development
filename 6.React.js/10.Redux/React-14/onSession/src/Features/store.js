import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/CounterSlice'
import taskReducer from '../Features/taskSlice'
const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo:taskReducer
    }
})

export default store;