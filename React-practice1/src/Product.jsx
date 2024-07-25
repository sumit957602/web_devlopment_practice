import './Product.css'
import Price from './Price.jsx'

function Product ({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descreption = [
        ["8000 DPI", "5 Programmable Buttons"],
        ["Intutive touch surface","Designed for Ipad Pro"],
        ["Designed for Ipad Pro", "Intutive touch surface"],
        ["Wireless Mouse 2.4GHz", "Optical orientation"]
    ]
    let styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div className='Product'>
            <h4 style={styles}>{title}</h4>
            <p style={styles}>{descreption[idx][0]}</p>
            <p style={styles}>{descreption[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;