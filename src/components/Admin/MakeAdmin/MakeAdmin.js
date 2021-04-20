import React from 'react';
import SideBar from '../Sidebar/SideBar';
import logo from '../../../logo.png';

const MakeAdmin = () => {
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
                   <h2>Make Admin</h2>
                   <hr/>
                </div>
                    
            </div>
        </div>
    );
};

export default MakeAdmin;