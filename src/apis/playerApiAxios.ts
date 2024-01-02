import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios'

export const getPlayersById = createAsyncThunk(
    'players/player',
    async (id:string) => {
    const response = await axios.get(`players?name=${id}`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com/'
    }).catch()

    return response.data;
});

export const getPlayersByTeamId = createAsyncThunk(
    'players/team',
    /**  @param arg {{ id:number, season:number }} */
    async ({id,season}:{id:number,season:number}) => {
    const response = await axios.get(`players`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        params: {
            team: id,
            season: season
          },
        baseURL: 'https://api-nba-v1.p.rapidapi.com/'
    }).catch()

    return response.data;
});