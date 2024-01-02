import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FC } from "react";
import { Teams } from '../games/reducers/gamesSlice';


const TeamsTab:FC<{teams:Teams}> = ({teams}) =>
(
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title={teams.home.name}>
        Tab content for Home
      </Tab>
      <Tab eventKey="away" title={teams.visitors.name}>
        Tab content for Profile
      </Tab>
    </Tabs>
  );

export default TeamsTab;