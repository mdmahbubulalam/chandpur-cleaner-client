import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceDetail.css'
import { useHistory } from 'react-router';

const ServiceDetail = ({service}) => {
    const history = useHistory();
    const handleOrderService = (id) => {
        console.log(id);
        history.push(`/usersService/${id}`);
    }
    return (
        <div className="col-md-3 text-center serviceCard "  onClick={() => handleOrderService(service._id)}>
            
                <img src={service.image} className="img-fluid rounded" alt=""/>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            
        </div>
    
        
    );
};

export default ServiceDetail;