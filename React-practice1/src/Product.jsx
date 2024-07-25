import './Product.css'
import Price from './Price.jsx'

function Product ({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descreption = [
        "8000 DPI",
        "Intutive touch surface",
        "Designed for Ipad Pro",
        "Wireless Mouse 2.4GHz"
    ]
    return (
        <div className='Product'>
            <h4>{title}</h4>
            <p>{descreption[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;