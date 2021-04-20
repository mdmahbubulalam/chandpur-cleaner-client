import React, { useContext, useEffect, useState } from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';
import { UserContext } from '../../../App';

const UsersServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        fetch('https://nameless-caverns-23094.herokuapp.com/orders?email='+loggedInUser.email)
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
                    <UsersSideBar />
                </div>
                
                <div className="col-md-9 mt-4">
                   <h2> Service List</h2>
                   <hr/>
                   <p>You have ordered {orders.length} product. Your email address is - <b>{loggedInUser.email}</b></p>
                   <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            orders.map(order => 
                                <tr>
                                    <td>{order.service}</td>
                                    <td>{order.description}</td>
                                    <td>{order.status}</td>
                                    <td><img src={order.image} className="img-fluid rounded" alt=""/></td>
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

export default UsersServiceList;