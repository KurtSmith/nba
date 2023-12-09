import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios'

export const getTeams= createAsyncThunk(
    'teams/teams',
    async () => {
    const response = await axios.get(`teams`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com/'
    }).catch()

    return response.data;
});