import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import styles from "./Player.module.css"
import { getTeams } from "../../apis/teamApiAxios"
import { Team } from './reducers/gamesSlice';
import { useEffect, useRef } from 'react';


export function GameComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const ref = useRef(1);
  const teams: Games[] = useTypedSelector((state: RootState) => state.games);


  return (
    <div>
      <div id="firstnameLabel" style={{ display: 'flex', flexDirection: 'column' }}>
        {teams.length}
      </div>
      <button>click</button>
      {
        teams.map( team=>
          (
            <>
            <div>{team.name}</div>
            <img src={team.logo}></img>
            </>
          ))
      }
    </div>
  )
}