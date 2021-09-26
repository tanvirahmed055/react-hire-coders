import React from 'react';
import './Expert.css'

const Expert = (props) => {

    // object destructuring
    const { name, skill, experience, location, fee, img } = props.expert || {};

    return (
        <div className="col-md-4 mb-5">
            <div className="single-expert card h-100 shadow rounded p-3">
                <div>
                    <img src={img} className="card-img-top product-image" alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-title fw-bolder text-center text-success">Name:&nbsp;<span className="fw-normal text-dark"> {name}</span></h6>
                    <p className="card-text text-center fw-bolder text-success">Skill:&nbsp;<span className="fw-normal text-dark">{skill} </span></p>
                    <p className="card-text text-center fw-bolder text-success">Experience:&nbsp; <span className="fw-normal text-dark">{experience}  years</span></p>
                    <p className="card-text text-center fw-bolder text-success">From:&nbsp; <span className="fw-normal text-dark">{location}</span></p>
                    <p className="fw-bold text-center fw-bolder text-success">Fee Per Month:&nbsp;  <span className="fw-normal text-dark">${fee}</span></p>
                </div>
                <div className="d-grid gap-2 col-9 mx-auto add-button">
                    <button className="btn btn-success" type="button" onClick={() => props.handleAddToCart(props.expert)}><i className="fas fa-user-plus"></i> &nbsp;Add To Hire</button>
                </div>
                <div className=" mx-auto mt-3 text-secondary">
                    <i className="fab fa-facebook-square fa-2x icon facebook-icon-color"></i>
                    <i className="fab fa-twitter-square fa-2x icon twitter-icon-color"></i>
                    <i className="fab fa-linkedin fa-2x icon linkedin-icon-color"></i>

                </div>
            </div>
        </div>
    );
};

export default Expert;