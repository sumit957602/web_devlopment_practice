import { useState } from "react";

function StatePractice () {
    let [ count, setCount] = useState(0);
    
    let increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Count</h3>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase count</button>
        </div>
    )
}

export default StatePractice;