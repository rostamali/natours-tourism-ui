import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {

    const {user} = useAuth();
    const [allOrders, setAllOrders] = useState([])
    useEffect(()=>{
        const url = `https://intense-earth-41554.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAllOrders(data)
        })
    },[])


    const myOrder = allOrders?.filter(order => order.userEmail === user.email);


    // delete items
    const handleOrderDelete = id =>{
        
        const url =  `https://intense-earth-41554.herokuapp.com/order/${id}`;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success btn-confirm',
                cancelButton: 'btn btn-danger btn-cancel'
            },
            buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be revert It!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Delete It!',
        cancelButtonText: 'No, Cancel!',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {

            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount === 1){
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Order has been Deleted!',
                        'success'
                    )
                    const remaining = myOrder.filter(order => order._id !== id);
                    setAllOrders(remaining);
                }
            })
            
        }
        })

    }

    return (
        <div className="my-order-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="order-items-wrapper">
                            {
                                myOrder.map(order => <div className="order-list" key={order._id}>
                                    <div className="order-item">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
                                                <div className="order-thumbnail text-md-start text-center">
                                                    <img src={order.orderItem.serviceImage} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="order-package-info text-center">
                                                    <h4>{order.orderItem.serviceName}</h4>
                                                    <p className="mt-2">{order.orderItem.serviceLocation}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="order-status text-center">
                                                    <p className="subtitle">{order.status}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="btn-box text-md-end text-center">
                                                    <button onClick={()=>handleOrderDelete(order._id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;