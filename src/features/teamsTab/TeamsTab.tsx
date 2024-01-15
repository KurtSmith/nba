import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FC } from "react";
import { Game, GameWithPlayers } from '../games/reducers/gamesSlice';


const TeamsTab:FC<{game:GameWithPlayers}> = ({game}) =>
(
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title={game.teams.home.name}>
        <div style={{display:'flex', flexDirection:'column'}}>
          {game.statistics.filter(team=>team.team.id === game.teams.home.id).map(stat=>
          (
            <div style={{display:'flex', flexDirection:'row', justifyContent:'left', margin:'0 5'}}>
              <div style={{width:'10%', flexGrow:'1', display:'inherit'}}>{stat.player.firstname}</div>
              <div style={{width:'10%', flexGrow:'1', display:'inherit'}}>{stat.player.lastname}</div>
              <div style={{width:'10%', flexGrow:'1', display:'inherit'}}>{stat.assists}</div>
            </div>
          ))}
        </div>
      </Tab>
      <Tab eventKey="away" title={game.teams.visitors.name}>
      <div style={{display:'flex', flexDirection:'column'}}>

          {game.statistics.filter(team=>team.team.id === game.teams.visitors.id).map(stat=>
            (
              <div style={{display:'flex', flexDirection:'row'}}>
                <div>{stat.player.firstname}</div>
                <div>{stat.player.lastname}</div>
                <div>{stat.assists}</div>
              </div>
            ))}
        </div>
      </Tab>
    </Tabs>
  );

export default TeamsTab;