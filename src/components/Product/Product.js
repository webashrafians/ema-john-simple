import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="content">
            <h4>{name}</h4>
            <br/>
            <p>by : {seller}</p>
            <br/>
            <p>$ {price}</p>
            <br/>
            <p> Only {stock} left in stock</p>
            <button className="main-btn" 
            onClick={
                () => props.handleAddProduct(props.product)
                } 
            >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;