import React, { useContext, useEffect, useState } from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';
import { UserContext } from '../../../App';

const UsersServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [usersServiceList,setUsersServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setUsersServiceList(data))
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
                   {
                    usersServiceList.map(order => 
                        <ul>
                            <li>{order?.service}</li>
                        </ul>
                    )
                }
                </div> 
                        
            </div>
        </div>
    );
};

export default UsersServiceList;