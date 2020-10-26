import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const { img, name, seller, price, stok,button } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"> {name}</h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <br />
                <p><small>Only {stok} left in stok-order soon</small></p>
                <button className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}
                >
                    add to cart</button>

            </div>
        </div>
    );
};

export default Product;