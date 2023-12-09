import logo from "./logo.svg"
import 'bootstrap/dist/css/bootstrap.css';
import { PlayerComponent } from "./features/players/Player"
import "./App.css"
import { TeamsComponent } from "./features/teams/Team"
import Nav from "./Nav";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (   
    <div className="App">
      <Nav/>
      <Routes> 
        <Route path="/" element={<Home />}/>     
        <Route path="Player"element={<PlayerComponent/> } /> 
        <Route path="Teams" element={<TeamsComponent/> } /> 
      </Routes> 
      <Outlet></Outlet>
    </div>
  )
}

export default App
