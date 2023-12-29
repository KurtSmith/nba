import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import { Game } from './reducers/gamesSlice';
import { useEffect, useRef } from 'react';
import { getGames } from '../../apis/gamesApiAxios';
import {Accordion} from 'react-bootstrap'
import './Games.css'


export function GameComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const date = new Date();
    var d = new Date();
    d.setDate(d.getDate() - 2);
    dispatch(getGames(`${d.toISOString().substr(0, 10)}`));
  }, []);
  const ref = useRef(1);
  const games: Game[] = useTypedSelector((state: RootState) => state.games);


  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {games.length}
      </div>
      {
        games.map( (team,index)=>
          (
            <div className='flexDivOuter'>
              <div>
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
                    <span className='scoreTest'>{team.scores.visitors.points}</span>
                  </div>
                  <div className='scoreDivRight'>
                  <span className='scoreTest'>{team.scores.visitors.points}</span>
                  </div>
                </div>
              </div>
              <div>
              <Accordion className='accordionStyle'>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
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