import React from 'react';
import './SideBar.css'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faSignOutAlt,faUserPlus,faList,faTasks } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const history = useHistory();
    const handleOrderList = () =>{
        history.push('/orderList')
    }
    const handleAddService = () =>{
        history.push('/addService')
    }
    const handleMakeAdmin = () =>{
        history.push('/makeAdmin')
    }
    const handleManageService = () =>{
        history.push('/manageService')
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
                        <ul className="list-unstyled">
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleOrderList}>
                                    <FontAwesomeIcon icon={faList} /> <span>Order List</span> 
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleAddService}>
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleMakeAdmin}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleManageService}>
                                    <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                                </button>
                            </li>
                        </ul>
                        <div>
                            <button className="btn btn-success font-weight-bold text-white"> 
                                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                            </button>
                        </div>
                    </div>
    );
};

export default SideBar;