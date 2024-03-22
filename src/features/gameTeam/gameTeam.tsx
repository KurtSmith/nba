import { GameWithPlayers } from "../games/reducers/gamesSlice";

export default function GameTeam({ game, home }: { game: GameWithPlayers, home: boolean }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', margin: '0 5', border:'solid gray', fontWeight:'bold'}}>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Name</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Min</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Pts</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Ast</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Reb</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>Blk</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>FGA</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>FGM</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>FGP</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>TOs</div>
                <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>+/-</div>
            </div>
            {home ? game.statistics.filter(team => team.team.id === game.teams.home.id).map(stat =>
            (
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', margin: '0 5' }}>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.player.firstname[0]}. {stat.player.lastname}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.min}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.points}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.assists}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.totReb}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.blocks}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fga}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fgm}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fgp}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.turnovers}</div>
                    <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.plusMinus}</div>
                </div>
            )) :
                game.statistics.filter(team => team.team.id === game.teams.visitors.id).map(stat =>
                (
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', margin: '0 5' }}>
                       <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.player.firstname[0]}. {stat.player.lastname}</div>
                       <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.min}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.points}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.assists}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.totReb}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.blocks}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fga}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fgm}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.fgp}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.turnovers}</div>
                        <div style={{ width: '10%', flexGrow: '1', display: 'inherit' }}>{stat.plusMinus}</div>
                    </div>
                ))}
        </div>
    )
}