import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="p-2">
                <h2>Hire a Team of Expert Programmers</h2>
                <p>TP Network is an exclusive network of the top programmers in the world. Top companies can hire these top programmers for their most complex projects</p>
                <h2> Total Budget: <span className="fw-bolder">150 Million</span> </h2>
            </div>
        </div>
    );
};

export default Header;