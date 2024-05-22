import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getUserFromServer = createAsyncThunk(
  "users/getUserFromServer",
  async (url) => {
    // console.log('url',url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);
export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`,{
      method:'DELETE'
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(getUserFromServer.fulfilled,(state,action)=>{
      console.log('action...',action.payload)
        return action.payload
    })
    builder.addCase(removeUser.fulfilled,(state,action)=>{
        console.log('stateeere',current(state))
        console.log('actionre',action.payload.id)
        const newState =current(state)?.filter( user => user._id !==  action.payload.id )
        return newState
    })
  },
});

export default slice.reducer;
