import { useState } from "react";
import './Lottery.css'
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery ({n, winningSum}) {
    let [ ticket, setTicket ] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let drawTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <div>
                <Ticket ticket={ticket}/>
            </div>
            <br />
            <button onClick={drawTicket}>Draw Again</button>
            <h2> { isWinning && "Congratulations, you won!"} </h2>
        </div>
    )
}

export default Lottery;
