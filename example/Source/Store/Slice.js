import {createSlice} from '@reduxjs/toolkit';
// const initialState={
//     data:[]
// };
export const cartslice = createSlice({
  name: 'cartslice',
  initialState: [],
  reducers: {
    ADD: (state=initialState, action) => {
      state.push(action.payload)

    },
    DELETE:(state,action)=>{
       return  state.filter((item)=> item.id !==action.payload)
   },
  
  },
});
export const {ADD,DELETE} = cartslice.actions;
export default cartslice.reducer;
