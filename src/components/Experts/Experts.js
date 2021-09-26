import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    //state for rendering experts on the UI
    const [experts, setExperts] = useState([]);
    //state for rendering selected experts and calculation on the UI
    const [cart, setCart] = useState([]);

    //fetch json data and setting it to a state
    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);


    //handle click event and set to a state
    const handleAddToCart = (expert) => {
        const alreadyAddedCheck = cart.find(person => person.name === expert.name);
        if (alreadyAddedCheck === undefined) {
            const newCart = [...cart, expert];
            setCart(newCart);
        }

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-7 mb-5 ">
                        <div className="row experts-container">
                            {
                                experts.map(expert => <Expert key={expert.name} expert={expert} handleAddToCart={handleAddToCart}></Expert>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-5 cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;