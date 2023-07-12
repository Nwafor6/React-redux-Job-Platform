import { createSlice } from "@reduxjs/toolkit";
import { jobList } from "./JobData";

const jobSlice =createSlice({
    name:"Jobs",
    initialState:jobList,
    reducers:{
        addJobs:(state, action)=>{
            state.push(action.payload)
        },
        filterJobWithTag:(state, action)=>{
            console.log(state, "State")
            return state=action.payload
        },
        undoFilters:(state, action)=>{
            console.log(state, "State")
            return state=action.payload
        }
    }
    

})

export const {addJobs, filterJobWithTag,undoFilters} =jobSlice.actions;
export default jobSlice.reducer