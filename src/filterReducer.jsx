import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"Filters",
    initialState:[],
    reducers:{
        addFilter:(state, action)=>{
            state.push(action.payload)
        },
        removeFilter:(state, action)=>{
            const filterId= action.payload;
            console.log(filterId)
            return state.filter(filter=> filter !==filterId)
        },
        cearFilter:(state)=>{
            return []
        }
    }
})

export const {addFilter, removeFilter, cearFilter}= filterSlice.actions;
export default filterSlice.reducer;