import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import styles from "./Player.module.css"
import { getPlayersById } from "../../apis/playerApiAxios"
import { Player } from './reducers/playerSlice';
import { useEffect } from 'react';


export function PlayerComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    
  }, []);

  const player: Player = useTypedSelector((state: RootState) => state.players);
  const searchForPlayer = (event: React.FormEvent<HTMLFormElement>) => {

    const els = Array.from((event.currentTarget as HTMLFormElement).elements);;
    const name = (els.find(field => field.id === "firstname") as HTMLFormElement)?.value;
    dispatch(getPlayersById(name));
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={searchForPlayer} style={{ display: 'flex', flexDirection: 'row' }}>
        <label>
          Name:
          <input id="firstname" type="text" className={styles.textbox} onChange={() => null} />
        </label>
        <input type="submit" value="Submit" className={styles.button}/>
      </form>
      <div id="firstnameLabel" style={{ display: 'flex', flexDirection: 'column' }}>
        {player.firstname}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {player.lastname}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {player.id}
      </div>
    </div>
  )
}
