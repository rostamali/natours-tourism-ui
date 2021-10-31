import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://intense-earth-41554.herokuapp.com/service', data)
        .then(res => {
            if(res.data.insertedId){
            
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
                        text: 'New Tour Package Add Successfully',
                    })
                })

                reset();
            }
        })
    };

    return (
        <div className="add-service-section mx-auto">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-header pb-3 mb-3">
                        <h3 className="form-title text-center">
                            Add New Tour Package
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" type="text" {...register("serviceName", { required: true })} placeholder="Name" />
                        <input className="form-control mb-3" type="url" {...register("serviceImage", { required: true })} placeholder="Image URL" />
                        <input className="form-control mb-3" type="text" {...register("serviceLocation", { required: true })} placeholder="Location" />
                        <input className="form-control mb-3" type="number" {...register("servicePrice", { min: 1 })} placeholder="Price" />
                        <textarea className="form-control mb-3 form-desc" {...register("serviceDesc")} placeholder="Package Description" />
                        <input className="btn-regular" type="submit" value="Add New Package" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;