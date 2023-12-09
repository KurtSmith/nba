import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import styles from "./Player.module.css"
import { getTeams } from "../../apis/teamApiAxios"
import { Team } from './reducers/teamSlice';
import { useEffect } from 'react';


export function TeamsComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams: Team[] = useTypedSelector((state: RootState) => state.teams);

  return (
    <div>
      <div id="firstnameLabel" style={{ display: 'flex', flexDirection: 'column' }}>
        {teams.length}
      </div>
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
