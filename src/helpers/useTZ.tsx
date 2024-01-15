import { Game, GameWithPlayers } from '../features/games/reducers/gamesSlice';
import { Team } from '../features/teams/reducers/teamSlice';

function useTZ(teams: GameWithPlayers[], dateString:string) {
    return teams.filter((item) => {
        let gameTime:string="";
        switch (item.teams.home.code) {
            case "BOS":
            case "CHA":
            case "NYK":
            case "PHI":
            case "MIA":
            case "BRK":
            case "WAS":
            case "ORL":
            case "CLE":
            case "ATL":
            case "IND":
            case "TOR":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
                break;
            case "DET":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
                break;
            case "NOP":
            case "MIL":
            case "MIN":
            case "MEM":
            case "HOU":
            case "DAL":
            case "OKC":
            case "CHI":
            case "SAS":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
            case "PHX":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
            case "GSW":
            case "LAL":
            case "POR":
            case "LAC":
            case "SAC":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
                break;
            case "UTA":
            case "DEN":
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
                break;
            default:
                gameTime = new Date(item.date.start).toLocaleString('en-US', { timeZone: 'America/Los_Angeles',year:"numeric", month:"2-digit", day:"2-digit"});
                break;
        }
       
        if(gameTime.substr(0, 10).split("/")[1] === dateString.split("-")[2])
            return true;
    });
}

export default useTZ;