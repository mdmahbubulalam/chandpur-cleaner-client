import React from 'react';
import UsersSideBar from '../UsersSideBar/UsersSideBar';
import logo from '../../../logo.png';

const UsersReview = () => {
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
                   <h2> review</h2>
                   <hr/>
                </div> 
                        
            </div>
        </div>
    );
};

export default UsersReview;