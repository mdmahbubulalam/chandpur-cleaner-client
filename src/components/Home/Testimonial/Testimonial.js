import React from 'react';
import '../Testimonials/Testimonials.css'

const Testimonial = ({testimonial}) => {
    return (
        <div className="card shadow-sm testimonial-card">
            <div className="card-body">
                <p className="card-text text-center">{testimonial.quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3 rounded" src={testimonial.img} alt="" width="60"/>
                <div>
                    <h6 className="text-color">{testimonial.name}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;