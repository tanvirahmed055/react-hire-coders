import React from 'react';
import './Expert.css'

const Expert = (props) => {
    const { name, skill, experience, location, fee, img } = props.expert || {};

    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100 shadow rounded p-3">
                <div>
                    <img src={img} className="card-img-top product-image" alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-title fw-bolder text-center">Name:<span className="fw-normal"> {name}</span></h6>
                    <p className="card-text text-dark text-center fw-bolder">Skill: <span className="fw-normal">{skill} </span></p>
                    <p className="card-text text-dark text-center fw-bolder">Experience: <span className="fw-normal">{experience}  years</span></p>
                    <p className="card-text text-dark text-center fw-bolder">From: <span className="fw-normal">{location}</span></p>
                    <p className="fw-bold text-center fw-bolder">fee:  $<span className="fw-normal">{fee}</span></p>
                </div>

            </div>
        </div>
    );
};

export default Expert;