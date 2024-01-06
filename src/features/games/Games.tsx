import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import gamesSlice, { Game, GameWithPlayers } from './reducers/gamesSlice';
import { useEffect, useState } from 'react';
import { getGames } from '../../apis/gamesApiAxios';
import { Accordion } from 'react-bootstrap'
import Calendar from 'react-calendar';
import './Games.css'
import 'react-calendar/dist/Calendar.css';
import useTZ from '../../helpers/useTZ';
import TeamsTab from '../teamsTab/TeamsTab';
import { getPlayersByTeamId } from '../../apis/playerApiAxios';
import { Player } from '../players/reducers/playerSlice';

export function GameComponent() {

  const [dateString, setDateString] = useState("");

  const dispatch = useAppDispatch();


  useEffect(() => {
    if (dateString === "")
      setDateString(getDateString(""));
    dispatch(getGames(dateString))
      .then((values) => {
        let gamesWithPlayers: GameWithPlayers[] = [];
        values.payload.forEach((game: Game) => {
          dispatch(getPlayersByTeamId({ id: game.teams.home.id, season: 2023 }))
            .then((players) => {
              let copy: GameWithPlayers = { players: players.payload, ...game };

              console.log(players.payload);
              return values.payload;
            });
        })
      }
      )
  }, [dateString]);

  const games: Game[] = useTypedSelector((state: RootState) => state.games);
  const tzs = useTZ(games, dateString);

  const getDateString = (date: string): string => {
    var d = date === "" ? new Date() : new Date(date);
    return `${d.toISOString().substr(0, 10)}`;
  }

  const onChange = (value: any) => { setDateString(getDateString(value)) }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center' }}>
        <Calendar className="inherit-font-family" onChange={onChange} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center' }}>
        <span className='date'>{dateString}</span>
      </div>
      {
        tzs.map((team, index) =>
        (
          <div className='flexDivOuter'>
            <div className="team-scoreDiv">
              <div className='flexDiv'>
                <div className='scoreDivLeft'>
                  <img src={team.teams.visitors.logo}></img>
                </div>
                <div className='scoreDivRight'>
                  <img src={team.teams.home.logo}></img>
                </div>
              </div>
              <div className='flexDiv'>
                <div className='scoreDivLeft'>
                  <span className='scoreTest span'>{team.scores.visitors.points}</span>
                </div>
                <div className='scoreDivRight'>
                  <span className='scoreTest span'>{team.scores.home.points}</span>
                </div>
              </div>
            </div>
            <div>
              <Accordion className='accordionStyle'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Box Score</Accordion.Header>
                  <Accordion.Body>
                    <TeamsTab teams={team.teams} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        )
        )
      }
    </div>
  )
}