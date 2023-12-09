import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { RootState } from '../../../state/store'
import { getTeams } from '../../../apis/teamApiAxios'

// First, create the thunk
export const fetchPlayerById = createAsyncThunk(
    'teams/fetchTeams',
    async (userId: string, thunkAPI) => {
      const response = await getTeams()
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
    builder.addCase(getTeams.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      return action.payload.response;
    })
  },
})

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.teams

export interface Team {
  id:           number;
  name:         string;
  nickname:     string;
  code:         string;
  city:         string;
  logo:         string;
  allStar:      boolean;
  nbaFranchise: boolean;
  leagues:      Leagues;
}

export interface Leagues {
  standard:   League;
  vegas:      League;
  utah:       League;
  sacramento: League;
}

export interface League {
  conference: string;
  division:   string;
}
