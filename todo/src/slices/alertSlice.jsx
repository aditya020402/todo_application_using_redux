import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    isVisible:false,
    type:'', // classes : success ,danger
    title:'',
}

const alertSlice = createSlice({
    name:'alert',
    initialState:initialStateValue,
    reducers:{
        showAlert:(state,action)=>{
            return{
                ...state,
                isVisible:true,
                ...action.payload,
            }
        },
        hideAlert:()=>{
            return initialStateValue;
        },
    },
})

export const {showAlert,hideAlert} = alertSlice.actions;
export default alertSlice.reducer;