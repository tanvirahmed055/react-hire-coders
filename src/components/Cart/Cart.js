import React from 'react';
import './Cart.css'


const Cart = (props) => {

    //cart destructuring
    const { cart } = props || {};

    // Total cost calculation
    const totalReducer = (previous, current) => previous + current.fee;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="cart-items">
            <h4 className="cart-text"><i className="fas fa-user-check"></i>&nbsp;Experts Added: <span className="amount fw-bolder">{props.cart.length}</span></h4>
            <br />
            <h4 className="cart-text"><i className="fas fa-coins"></i>&nbsp;Cost: <span className="amount fw-bolder">$ {total}</span> </h4>
            <br />
            {
                cart.map(expert => <li key={expert.name}><i className="far fa-check-circle"></i>&nbsp;&nbsp;<span className="text-decoration-underline">{expert.name}</span> added!</li>)
            }
        </div>
    );
};

export default Cart;