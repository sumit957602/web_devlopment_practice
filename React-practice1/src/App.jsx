import './App.css'
import ProductTab from './ProductTab.jsx'

function App() {
  let styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
    <h2 style={styles}>Blockbuster Deals | Shop Now</h2>
    <ProductTab />
    </>
  )
}

export default App;
