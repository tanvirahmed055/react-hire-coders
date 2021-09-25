import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('./expertsData.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-7 mb-5">
                        <div className="row">
                            {
                                experts.map(expert => <Expert expert={expert}></Expert>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-5 cart-main"></div>
                </div>
            </div>
        </div>
    );
};

export default Experts;