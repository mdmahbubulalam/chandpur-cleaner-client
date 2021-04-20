import React, { useEffect, useState } from 'react';
import logo from '../../../logo.png';
import SideBar from '../Sidebar/SideBar';

const OrderList = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        fetch('https://nameless-caverns-23094.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    } ,[])
    return (
        <div className="container">
            <div className="text-center">
                <a href="/">
                    <img src={logo} className="w-25 mb-2" alt=""/>
                </a> 
            </div>
            <div className="row">
                
                <div className="col-md-3">
                    <SideBar />
                </div>
                
                <div className="col-md-9 mt-4">
                   <h2>Order List</h2>
                   <hr/>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map(order => 
                                <tr>
                                    <td>{order.userName}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.service}</td>
                                    <td>{order.payWith}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        }
                            
                        </tbody>
                    </table>
                   
                </div>
                    
            </div>
        </div>
    );
};

export default OrderList;