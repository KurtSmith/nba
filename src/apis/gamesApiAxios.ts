import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const getGames = createAsyncThunk(
    'games/games',
    async (date:string) => {
        const test = new Date(date+"T00:00:00.00");
        test.setDate(test.getDate()+1);
        const nextDay = test.toISOString().substr(0,10);
        const local = new Date("2023-12-09T00:00:00.000Z").toLocaleString('en-US', { timeZone: 'America/New_York' })
        //nextDay.setDate(nextDay.getDate() +1);
    const response:any = await Promise.all([await axios.get(`games?date=${date}`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com/'
    }),await axios.get(`games?date=${nextDay}`, {
        headers: {
            'X-RapidAPI-Key':'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        },
        baseURL: 'https://api-nba-v1.p.rapidapi.com/'
    })]).then((values)=>{return values.flatMap(item=>item.data.response)});
    response.map( (item:any) => 
    {
    const localDate:string = new Date(item.date.start).toLocaleDateString('en-us', {timeZone: "America/New_York"});
    console.log(new Date(localDate).toISOString().substr(0,10))
    });
    return response;
});