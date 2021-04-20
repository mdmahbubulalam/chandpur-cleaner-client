import React from 'react';
import logo from '../../../logo.png';
import SideBar from '../Sidebar/SideBar';

const OrderList = () => {
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
                   <h2>Order List</h2>
                   <hr/>
                   
                </div>
                    
            </div>
        </div>
    );
};

export default OrderList;