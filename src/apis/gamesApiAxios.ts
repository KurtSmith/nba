import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { getPlayersByTeamId } from './playerApiAxios';
import { Game, GameWithPlayers } from '../features/games/reducers/gamesSlice';
import { getPlayerStatsByGame } from './statisticsApiAxios';

export const getGames = createAsyncThunk(
    'games/games',
    async (date: string, {dispatch}) => {
        const test = new Date(date + "T00:00:00.00");
        test.setDate(test.getDate() + 1);
        const nextDay = test.toISOString().substr(0, 10);
        let gamesWithPlayers:GameWithPlayers[]=[];
        //nextDay.setDate(nextDay.getDate() +1);
        const response: any = await Promise.all([await axios.get(`games?date=${date}`, {
            headers: {
                'X-RapidAPI-Key': 'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            },
            baseURL: 'https://api-nba-v1.p.rapidapi.com/'
        }), await axios.get(`games?date=${nextDay}`, {
            headers: {
                'X-RapidAPI-Key': 'dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            },
            baseURL: 'https://api-nba-v1.p.rapidapi.com/'
        })])
        .then((values) => { return values.flatMap(item => item.data.response) })
        .then(async (values) => {
            await Promise.all(values.map(async (game: Game) => {
              await dispatch(getPlayersByTeamId({ id: game.teams.home.id, season: 2023 }))
                .then((players) => {
                  let copy: GameWithPlayers = { players: players.payload.response, ...game };
                  gamesWithPlayers = [...gamesWithPlayers, copy];
                });
            }))
            return gamesWithPlayers;
        })
        .then(async (games)=>{
            const gamesWithStats:GameWithPlayers[] = [];
            const response = await Promise.all(games.map(async (game)=>
            { 
                const stats = await dispatch(getPlayerStatsByGame(game.id));
                game.statistics = stats.payload.response;
                gamesWithStats.push(game);
            }));
            return gamesWithStats;
        });
        return response;
    });