import { RootState, useTypedSelector, useAppDispatch } from '../../state/store'
import styles from "./Player.module.css"
import { getPlayersById } from "../../apis/playerApiAxios"
import { getPlayerStatsBySeason } from '../../apis/statisticsApiAxios';
import { Player } from './reducers/playerSlice';
import { useEffect } from 'react';
import PlayerStats from '../player/player';
import { Button, Form, InputGroup } from 'react-bootstrap';


export function PlayerComponent() {
  const dispatch = useAppDispatch();
  useEffect(() => {

  }, []);

  const player: Player[] = useTypedSelector((state: RootState) => state.players);
  const searchForPlayer = (event: React.FormEvent<HTMLFormElement>) => {

    const els = Array.from((event.currentTarget as HTMLFormElement).elements);;
    const name = (els.find(field => field.id === "firstname") as HTMLFormElement)?.value;
    dispatch(getPlayersById(name));
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={searchForPlayer} style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', fontSize: 'xx-large' }}>
        <InputGroup size="lg" style={{ maxWidth: '30%', margin:'1%' }}>
          <Form.Control
            placeholder="Player Last Name"
            aria-label="Player Last Name"
            aria-describedby="basic-addon2"
            id="firstname"
          />
          <Button variant="outline-secondary" id="button-addon2" type='submit'>
            Search
          </Button>
        </InputGroup>
      </form>
      <div style={{display:'flex', flexFlow:'row wrap',justifyContent: 'center', fontSize: 'xx-large', flexDirection:'column', alignContent:'center'}}>
        {player.map(player =>
            <PlayerStats player={player}></PlayerStats>)}
        </div>
    </div>
  )
}
