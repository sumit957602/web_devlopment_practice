import Lottery from './Lottery.jsx'

import './App.css'

function App() {

  return (
    <>
    <h1>Lottery Game</h1>
    <Lottery n={5} winningSum={15} />
    </>
  )
}

export default App
