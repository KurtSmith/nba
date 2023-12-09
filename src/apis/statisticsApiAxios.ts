import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios'

export const getStatistics = createAsyncThunk(
    'teams/teams',
    async ({id,season}:{id:string, season:string}) => {
    const response = await axios.get(`statistics?id=${id}&season=${season}`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com'
    }).catch()

    return response.data;
});