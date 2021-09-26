import React from 'react';
import './Cart.css'


const Cart = (props) => {

    // console.log(props);

    //cart destructuring
    const { cart } = props || {};


    // console.log(cart);


    const total = cart.reduce((previous, current) => previous + current.fee, 0);

    return (
        <div className="cart-items">
            <h4 className="cart-text"><i className="fas fa-user-check"></i>Experts Added: <span className="amount text-secondary fw-bolder">{props.cart.length}</span></h4>
            <h4 className="cart-text">Total Fee: <span className="amount text-secondary fw-bolder">$ {total}</span> </h4>
            {
                cart.map(expert => <li className="text-success">{expert.name}</li>)
            }
        </div>
    );
};

export default Cart;