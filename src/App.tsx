import logo from "./logo.svg"
import 'bootstrap/dist/css/bootstrap.css';
import { PlayerComponent } from "./features/players/Player"
import "./App.css"
import { TeamsComponent } from "./features/teams/Team"
import Nav from "./Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { GameComponent } from "./features/games/Games";
import './fonts/RollboxBold-OVxvO.ttf'

function App() {
  return (   
    <div className="App">
     <div className="App-Nav">
      <Nav/>
      </div>
      <Routes> 
        <Route path="/" element={<GameComponent />}/>     
        <Route path="Player"element={<PlayerComponent/> } /> 
        <Route path="Teams" element={<TeamsComponent/> } /> 
      </Routes> 
      <Outlet/>
    </div>
  )
}

export default App
