import { useState } from "react";
import './Lottery.css'
import { genTicket, sum } from "./helper";

function Lottery () {
    let [ ticket, setTicket ] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let drawTicket = () => {
        setTicket(genTicket(3));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={drawTicket}>Draw Again</button>
            <h2> { isWinning && "Congratulations, you won!"} </h2>
        </div>
    )
}

export default Lottery;
