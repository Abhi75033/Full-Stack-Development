import { createSlice } from "@reduxjs/toolkit";

const CounterSlice= createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:state=>{
          state.value= state.value+1;
        },
        decrement:state=>{
           state.value = state.value-1;
        },
        incrementByAmmount:(state,action)=>{
            state.value+=action.payload;
        },decrementByAmmount:(state,action)=>{
            state.value-=action.payload;
        }
    }
})

export const {increment,decrement,incrementByAmmount,decrementByAmmount} = CounterSlice.actions
export default CounterSlice.reducer;