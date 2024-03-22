import { FunctionComponent } from "react";
import { Player } from "../players/reducers/playerSlice"
import { Accordion, Card } from "react-bootstrap";

const PlayerStats: FunctionComponent<{ player: Player }> = ({ player }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{`${player.firstname} ${player.lastname}`}</Card.Title>
                <Accordion className='accordionStyle' onClick={()=>alert('clicked')}> 
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Stats</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}

export default PlayerStats;