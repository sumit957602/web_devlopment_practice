function CounterPractice () {
    let c = 0;
    function increaseCount () {
        c++;
        console.log(c);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{c}</h2>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}

export default CounterPractice;