import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import gamesSlice, { Game, GameWithPlayers } from './reducers/gamesSlice';
import { useEffect, useRef, useState } from 'react';
import { getGames } from '../../apis/gamesApiAxios';
import { Accordion } from 'react-bootstrap'
import Calendar from 'react-calendar';
import './Games.css'
import 'react-calendar/dist/Calendar.css';
import useTZ from '../../helpers/useTZ';
import TeamsTab from '../teamsTab/TeamsTab';
import { CirclesWithBar } from 'react-loader-spinner';

export function GameComponent() {

  const [dateString, setDateString] = useState("");
  const dispatch = useAppDispatch();
 

  useEffect(() => {
    if (dateString === "")
      setDateString(getDateString(""));
    dispatch(getGames(dateString));
  }, [dateString]);

  const games: GameWithPlayers[] = useTypedSelector((state: RootState) => state.games).games;
  const loading: boolean =  useTypedSelector((state: RootState) => state.games).isLoading;
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
      { loading ? <CirclesWithBar
        height="400"
        width="400"
        color="#4fa94d"
        outerCircleColor="blue"
        innerCircleColor="red"
        barColor="red"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{'display':'block'}}
        wrapperClass="centered"
        visible={true}/> 
        :
        tzs.map((game) =>
        (
          <div className='flexDivOuter'>
            <div className="team-scoreDiv">
              <div className='flexDiv'>
                <div className='scoreDivLeft'>
                  <img src={game.teams.visitors.logo}></img>
                </div>
                <div className='scoreDivRight'>
                  <img src={game.teams.home.logo}></img>
                </div>
              </div>
              <div className='flexDiv'>
                <div className='scoreDivLeft'>
                  <span className='scoreTest span'>{game.scores.visitors.points}</span>
                </div>
                <div className='scoreDivRight'>
                  <span className='scoreTest span'>{game.scores.home.points}</span>
                </div>
              </div>
            </div>
            <div className="team-scoreDiv"> 
              <Accordion className='accordionStyle'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Box Score</Accordion.Header>
                  <Accordion.Body>
                    <TeamsTab game={game} />
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