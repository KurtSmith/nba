import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { RootState } from '../../../state/store'
import { getStatistics } from '../../../apis/statisticsApiAxios'

// First, create the thunk
export const fetchStatics = createAsyncThunk(
    'statistics/fetchStatistics',
    async ({id,season}:{id:string,season:string}, thunkAPI) => {
      const response = await getStatistics({id,season})
      return response;
    }
  )

const slice = createSlice({
  name: 'statistics',
  initialState: [] as Statistics[],
  reducers: { 
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getStatistics.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      return action.payload.response;
    })
  },
})

export default slice.reducer

// Generated by https://quicktype.io

export interface Statistics {
  player:    Player;
  team:      Team;
  game:      Game;
  points:    number;
  pos:       string;
  min:       string;
  fgm:       number;
  fga:       number;
  fgp:       string;
  ftm:       number;
  fta:       number;
  ftp:       string;
  tpm:       number;
  tpa:       number;
  tpp:       string;
  offReb:    number;
  defReb:    number;
  totReb:    number;
  assists:   number;
  pFouls:    number;
  steals:    number;
  turnovers: number;
  blocks:    number;
  plusMinus: string;
  comment:   null;
}

export interface Game {
  id: number;
}

export interface Player {
  id:        number;
  firstname: string;
  lastname:  string;
}

export interface Team {
  id:       number;
  name:     string;
  nickname: string;
  code:     string;
  logo:     string;
}
