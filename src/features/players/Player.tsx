import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import styles from "./Player.module.css"
import { getPlayersById } from "../../apis/playerApiAxios" 
import { Player } from './reducers/playerSlice';
import { useEffect } from 'react';
import { FormEvent } from "react";

export function PlayerComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPlayersById("1"));
  }, []);
  
  const player:Player = useTypedSelector((state: RootState) => state.slice);
  const searchForPlayer = (event:React.FormEvent<HTMLFormElement>)=>{
   
    const els = Array.from((event.currentTarget as HTMLFormElement).elements);        ;
    console.log((els.find(field=>field.id === "firstname")as HTMLFormElement)?.value);
    event.preventDefault();
  };

  return (
    <div style={styles}>
      <form onSubmit={searchForPlayer}>
        <label>
          Name:
          <input id="firstname" type="text" value={"Ben"} onChange={()=>null} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="firstnameLabel" style={{display:'flex', flexDirection:'column'}}>
      {player.firstname}
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
      {player.lastname}
      </div>
    </div>
)
}
