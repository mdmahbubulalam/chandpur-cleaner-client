import React, { useEffect, useState } from 'react';
import testimonialImage1 from '../../../images/testimonialImage1.jpg';
import testimonialImage2 from '../../../images/testimonialImage2.jpg';
import testimonialImage3 from '../../../images/testimonialImage3.jpg';
import testimonialImage4 from '../../../images/testimonialImage4.jpg';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'



const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])

    return (
        <section className="container my-5 py-5" id="review"> 
            <div className="text-center">
                   <h5 className="text-uppercase font-color">Testimonial</h5>
                   <h1>What Our Clients Say</h1>
            </div> 
            <div className="card-deck mt-5">
                {
                    reviews.map(review => <Testimonial review={review} />)
                }
            </div> 
        </section>
    );
};

export default Testimonials;