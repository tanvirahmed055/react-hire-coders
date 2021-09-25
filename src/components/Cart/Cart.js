import React from 'react';


const Cart = (props) => {
    console.log(props.cart);
    const { name, fee } = props.cart || {};


    return (
        <div>
            <h3><i className="fas fa-user-check"></i>Experts Added: {props.cart.length}</h3>
        </div>
    );
};

export default Cart;