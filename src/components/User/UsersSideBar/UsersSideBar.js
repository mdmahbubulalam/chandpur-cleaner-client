import React from 'react';
import './UsersSideBar.css'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faSignOutAlt,faUserPlus,faList,faTasks } from '@fortawesome/free-solid-svg-icons';

const UsersSideBar = () => {
    const history = useHistory();
    const handleService = () =>{
        history.push('/usersService')
    }
    const handleServiceList = () =>{
        history.push('/usersServiceList')
    }
    const handleReview = () =>{
        history.push('/usersReview')
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
                        <ul className="list-unstyled">
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleService}>
                                    <FontAwesomeIcon icon={faList} /> <span>Service</span> 
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleServiceList}>
                                    <FontAwesomeIcon icon={faPlus} /> <span>Service List</span> 
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success font-weight-bold text-white" onClick={handleReview}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
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

export default UsersSideBar;