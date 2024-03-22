import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FC } from "react";
import { GameWithPlayers } from '../games/reducers/gamesSlice';
import GameTeam from '../gameTeam/gameTeam';


const TeamsTab:FC<{game:GameWithPlayers}> = ({game}) =>
(
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title={game.teams.home.name}>
        <GameTeam game={game} home={true}></GameTeam>
      </Tab>
      <Tab eventKey="away" title={game.teams.visitors.name}>
        <GameTeam game={game} home={false}></GameTeam>
      </Tab>
    </Tabs>
  );

export default TeamsTab;