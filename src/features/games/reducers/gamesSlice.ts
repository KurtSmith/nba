import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { getGames } from '../../../apis/gamesApiAxios';

// First, create the thunk
export const fetchGamesByDate= createAsyncThunk(
    'games/fetchGames',
    async (date: string, thunkAPI) => {
      const response = await getGames(date)
      return response;
    }
  )

const slice = createSlice({
  name: 'teams',
  initialState: [] as Team[],
  reducers: { 
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGames.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      return action.payload.response;
    })
  },
})

export default slice.reducer

