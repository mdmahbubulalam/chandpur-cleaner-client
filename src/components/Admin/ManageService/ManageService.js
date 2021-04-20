import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../../logo.png';
import SideBar from '../Sidebar/SideBar';

const ManageService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const history = useHistory();

    const deleteService = (id) => {
        fetch(`http://localhost:5000/delete/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            history.push(`/`);
        })
    }
    return (
        <div className="container">
            <div className="text-center">
                <img src={logo} className="w-25 mb-2" alt=""/>
            </div>
            <div className="row">
                
                <div className="col-md-3">
                    <SideBar />
                </div>
                
                <div className="col-md-9 mt-4">
                   <h2>Manage Service</h2>
                   <hr/>
                   <table class="table table-bordered mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    services.map(service => 
                                    <tr>
                                        <td>{service.title}</td>
                                        <td>{service.price}</td>
                                        <td>{service.description}</td>
                                        <td><button className="btn btn-danger btn-sm" onClick={() => deleteService(service._id)}>Delete</button></td>
                                    </tr>
                                        
                                )}
                        </tbody>
                    </table>
                </div>
                    
            </div>
        </div>
    );
};

export default ManageService;