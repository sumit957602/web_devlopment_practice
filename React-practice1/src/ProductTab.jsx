import { all } from 'axios';
import Product from './Product.jsx';

function ProductTab() {
    let styles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        allignItems: 'center'
    }
    return (
        <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronic Zed-Transformer" idx={2}/>
        <Product title="Portronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;