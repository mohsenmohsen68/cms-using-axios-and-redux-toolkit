import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    console.log('url',url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeArticle = createAsyncThunk(
  "articles/removeArticle",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`,{
      method:'DELETE'
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(getArticlesFromServer.fulfilled,(state,action)=>{
        console.log('state',state)
        console.log('action',action.payload)
        return action.payload 
    })
    builder.addCase(removeArticle.fulfilled,(state,action)=>{
      console.log('stateeere',current(state))
      console.log('actionre',action.payload.id)
      const newState =current(state)?.filter( article => article._id !==  action.payload.id )
      return newState
  })
  },
});

export default slice.reducer;
