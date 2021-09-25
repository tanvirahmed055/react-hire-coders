import React from 'react';


const Cart = (props) => {

    console.log(props);
    const { cart } = props || {};


    console.log(cart);


    const total = cart.reduce((previous, current) => previous + current.fee, 0);

    return (
        <div>
            <h4><i className="fas fa-user-check"></i>Experts Added: {props.cart.length}</h4>
            <h3>Total Fee: $ {total} </h3>
            {
                cart.map(expert => <li>{expert.name}</li>)
            }
        </div>
    );
};

export default Cart;