import logo from "./logo.svg"
import { PlayerComponent } from "./features/players/Player"
import "./App.css"
import { TeamsComponent } from "./features/teams/Team"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PlayerComponent />
        <TeamsComponent/>
      </header>
    </div>
  )
}

export default App
