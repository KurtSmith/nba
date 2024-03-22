import { createSlice, current } from '@reduxjs/toolkit'
import { getPlayersById, getPlayersByTeamId } from '../../../apis/playerApiAxios'
import { Statistics } from '../../statistics/reducers/statisticsSlice';

const slice = createSlice({
  name: 'player',
  initialState: [] as Player[],
  reducers: { 
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPlayersById.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      return action.payload.response;
    }),
    builder.addCase(getPlayersByTeamId.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      return action.payload.response;
    })
  },
})

export default slice.reducer

// Generated by https://quicktype.io

export interface Player {
  id:          number;
  firstname:   string;
  lastname:    string;
  birth:       Birth;
  nba:         Nba;
  height:      Height;
  weight:      Weight;
  college:     null;
  affiliation: string;
  leagues:     Leagues;
}

export interface PlayerWithStats extends Player {
  stats:Statistics;
}

export interface Birth {
  date:    Date;
  country: string;
}

export interface Height {
  feets:  null;
  inches: null;
  meters: null;
}

export interface Leagues {
  standard: Standard;
}

export interface Standard {
  jersey: number;
  active: boolean;
  pos:    null;
}

export interface Nba {
  start: number;
  pro:   number;
}

export interface Weight {
  pounds:    null;
  kilograms: null;
}