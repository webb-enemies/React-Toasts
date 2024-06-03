import { createSlice } from "@reduxjs/toolkit";

const init = {
    tost:{
        display:false,
        massage: "",
        color:"",
        icon:"",
        timeing:""
    }
}

export const tostslice = createSlice({
    name:"tost",
    initialState:init,
    reducers:{
        showtost:(state, action)=>{
            state.tost.display = true
            state.tost.massage = action.payload.massage
            state.tost.color = action.payload.color
            state.tost.icon = action.payload.icon
            state.tost.timeing = action.payload.timeing
        },
        hidetost:(state)=>{
            state.tost.display = false
        }
    }
})

export const {showtost, hidetost} = tostslice.actions

export default tostslice.reducer