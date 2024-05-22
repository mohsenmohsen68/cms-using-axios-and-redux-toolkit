import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    console.log('url',url);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/courses/${id}`,{
      method:'DELETE'
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(getCoursesFromServer.fulfilled,(state,action)=>{
        console.log('state',state)
        console.log('action',action.payload)
        return action.payload 
    })
    builder.addCase(removeCourse.fulfilled,(state,action)=>{
      console.log('stateeere',current(state))
      console.log('actionre',action.payload.id)
      const newState =current(state)?.filter( course => course._id !==  action.payload.id )
      return newState
  })
  },

});

export default slice.reducer;
