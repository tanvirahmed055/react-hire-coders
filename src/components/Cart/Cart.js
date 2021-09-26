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
            <h4 className="cart-text"><i className="fas fa-user-check"></i>&nbsp;Experts Added: <span className="amount fw-bolder">{props.cart.length}</span></h4>
            <br />
            <h4 className="cart-text"><i class="fas fa-coins"></i>&nbsp;Cost: <span className="amount fw-bolder">$ {total}</span> </h4>
            <br />
            {
                cart.map(expert => <li className=""><i class="far fa-check-circle"></i>&nbsp;&nbsp;{expert.name} added!</li>)
            }
        </div>
    );
};

export default Cart;