import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const [experts, setExperts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);

    useEffect(() => {

    }, []);

    const handleAddToCart = (expert) => {
        const newCart = [...cart, expert];
        setCart(newCart);
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