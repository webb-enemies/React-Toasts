import { configureStore } from "@reduxjs/toolkit";
import tostslice from "./Tostslice"

export const toststore = configureStore({
    reducer:{
        tostredicer: tostslice
        
    }
})