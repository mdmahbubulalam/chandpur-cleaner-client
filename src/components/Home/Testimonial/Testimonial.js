import React from 'react';
import '../Testimonials/Testimonials.css'

const Testimonial = ({review}) => {
    return (
        <div className="card shadow-sm testimonial-card">
            <div className="card-body">
                <p className="card-text text-center">{review.description}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3 rounded" src={review.image} alt="" width="60"/>
                <div>
                    <h6 className="text-color">{review.name}</h6>
                    <p className="m-0">{review.address}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;