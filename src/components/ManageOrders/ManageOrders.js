import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './ManageOrders.css';

const ManageOrders = () => {

    const [totalOrders, setTotalOrders] = useState([]);
    useEffect(()=>{
        const url = `https://intense-earth-41554.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTotalOrders(data)
        })
    },[])

    // delete all order
    const handleDeleteOrders = id =>{

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
                    const remaining = totalOrders.filter(order => order._id !== id);
                    setTotalOrders(remaining);
                }
            })
            
        }
        })
    }

    // update status
    const handleUpdateStatus = id =>{
        
        const url = `https://intense-earth-41554.herokuapp.com/order/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({status: "Active"})
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount === 1){

                const currentStatus = totalOrders.find(order => order._id === id);
                currentStatus["status"] = "Active";
                const remaining = totalOrders.filter(d=> d._id !== id);
                let filterData = [...remaining, currentStatus];
                setTotalOrders(filterData);

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
                        title: 'Well Done!',
                        text: 'Booking has been Approved',
                    })
                })
            }
        })
    }

    return (
        <div id="manage-order">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="order-items-wrapper">
                            {
                                totalOrders.map(order => <div className="order-list" key={order._id}>
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
                                                    <p className="my-1">{order.orderItem.serviceLocation}</p>
                                                    <p className="subtitle">Client Name: {order.userName}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="order-status text-center">
                                                    <p className="subtitle">{order.status}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12">
                                                <div className="btn-box text-md-end text-center">
                                                    <button onClick={()=>handleDeleteOrders(order._id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                                    <button onClick={()=>handleUpdateStatus(order._id)} className="btn btn-success">Approve</button>
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

export default ManageOrders;