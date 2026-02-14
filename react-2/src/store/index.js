import { configureStore } from "@reduxjs/toolkit";
import getTodoItemsSlice from './getTodoItemsSlice.js'
import userSlice from "./userStore.js";




const store=configureStore({
  reducer:{
    getTodoItemsStore:getTodoItemsSlice.reducer,
    userStore:userSlice.reducer
  }
})
export default store