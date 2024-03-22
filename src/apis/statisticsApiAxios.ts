import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

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

export const getPlayerStatsByGame = createAsyncThunk(
    'playerGame/statistics',
    async (gameId:number) => {
    const response = await axios.get(`players/statistics`, {
        params: {game:gameId},
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com'
    }).catch()

    return response.data;
});

export const getPlayerStatsBySeason = createAsyncThunk(
    'playerSeason/statistics',
    async ({id, season}:{id:number, season:number}) => {
    const response = await axios.get(`players/statistics`, {
        params: {id:id, season:season},
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com'
    }).catch()

    return response.data;
});