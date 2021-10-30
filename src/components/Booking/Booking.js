import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import './Booking.css';

const Booking = () => {

    const {serviceId} = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(()=>{
        const url = `https://intense-earth-41554.herokuapp.com/services/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleData(data));
    },[serviceId])

    // 
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{ 
        data.orderItem = singleData;
        data.status = 'Pending';
        const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: <p>Hello World</p>,
                footer: 'Copyright 2018',
                didOpen: () => {
                    MySwal.clickConfirm()
                }
            }).then(() => {
                return MySwal.fire({
                icon: 'success',
                title: 'Congrats!',
                text: 'Booking has been Placed',
            })
        })
        axios.post('https://intense-earth-41554.herokuapp.com/order', data)
        .then(res =>{})
    }

    const {user} = useAuth();

    

    return (
        <div id="booking-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="single-data-info">
                            <img src={singleData.serviceImage} alt="" className="img-fluid" />
                            <h3 className="service-title text-center">{singleData.serviceName}</h3>
                            <p className="service-location text-center">{singleData.serviceLocation}</p>
                            <div className="service-price-info text-center">
                                <h2 className="service-price"><span className="text-color">$</span>{singleData.servicePrice}<span className="text-person"> /Person</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="order-form-wrapper">
                            <h3 class="form-title text-center mb-3">Book Now Tour Package</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="order-input-group">
                                    <label>Name</label>
                                    <input className="form-control mb-3" type="text" {...register("userName", { required: true })} placeholder="Your Name" defaultValue={user.displayName} />
                                </div>
                                <div className="order-input-group">
                                    <label>Email</label>
                                    <input className="form-control mb-3" type="email" {...register("userEmail", { required: true })} placeholder="Your Email" defaultValue={user.email} />
                                </div>
                                <div className="order-input-group">
                                    <label>Phone</label>
                                    <input className="form-control mb-3" type="tel" {...register("userPhone", { required: true })} placeholder="Your Phone" />
                                </div>
                                <div className="order-input-group">
                                    <label>Person</label>
                                    <input className="form-control mb-3" type="number" {...register("personNumber", { min: 1})} placeholder="Person" />
                                </div>
                                <input className="btn-regular" type="submit" value="Book Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Booking;