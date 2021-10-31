import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const {serviceName, serviceImage, serviceLocation, servicePrice, _id, serviceDesc} = props.service;

    return (
        <div className="service-item">
            <div className="service-inner">
                <div className="service-thumbnail">
                    <img src={serviceImage} alt={serviceName} className="img-fluid" />
                </div>
                <div className="service-short-info">
                    <h3 className="service-title">{serviceName}</h3>
                    <p className="service-location">{serviceLocation}</p>
                    <p className="description">
                        {serviceDesc.slice(0, 80)}
                    </p>
                    <div className="service-footer">
                        <div className="service-price-info">
                            <h2 className="service-price"><span className="text-color">$</span>{servicePrice}<span className="text-person"> /Person</span></h2>
                        </div>
                        <div className="service-btn">
                            <p className="border-wrapper">
                                <NavLink to={`/service/${_id}`}>Book</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;