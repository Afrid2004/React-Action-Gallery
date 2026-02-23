import { configureStore } from "@reduxjs/toolkit";
import  ItemReducer from "./ItemSlice";


export const Store = configureStore({
  reducer : {
    ItemReducer : ItemReducer,
  }
})