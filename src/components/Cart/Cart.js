import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const price = cart.reduce((price, prd) => price + prd.price, 0);
    let price = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        price = price + product.price;
    }

    //shipping
    let shipping = 0;
    if(price > 35){
        shipping = 0
    } else if(price > 15){
        shipping = 4.99;
    } else if(price > 0){
        shipping = 12.99;
    } 

    //tax
    const tax = (price / 10).toFixed(2);

    // grand total
    const grandTotal = price + shipping + Number(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(price)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {tax}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;