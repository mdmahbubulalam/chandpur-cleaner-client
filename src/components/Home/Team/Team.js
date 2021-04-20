import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../OurTeam/OurTeam.css'
const Team = (props) => {
    const {name,designation,img ,icon1,icon2,icon3,icon4} = props.team;
    return (
        <div className="card shadow-sm text-center">
            <div className="card-header">
                <div className="img-thumbnail d-flex justify-content-center">
                    <img className="mx-3 rounded img-fluid" src={img} alt="" />
                </div>
                
            </div>
            <div className="card-body">
                <h5 className="font-color">{name}</h5>
                <p className="m-0">{designation}</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <div>
                <ul className="social-icon list-inline">
                    <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="icon" icon={icon1} /></a></li>
                    <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="icon" icon={icon2} /></a></li>
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={icon3} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={icon4} /></a></li>
                </ul>
                </div>
            </div>
       </div>
    );
};

export default Team;