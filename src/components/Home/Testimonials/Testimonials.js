import React from 'react';
import testimonialImage1 from '../../../images/testimonialImage1.jpg';
import testimonialImage2 from '../../../images/testimonialImage2.jpg';
import testimonialImage3 from '../../../images/testimonialImage3.jpg';
import testimonialImage4 from '../../../images/testimonialImage4.jpg';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'



const Testimonials = () => {
    const testimonialData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Phillip Hunt',
            from : 'Texas, USA',
            img : testimonialImage1
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Sara Grant',
            from : 'California, USA',
            img : testimonialImage2
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Luke Jacobs',
            from : 'Washington, USA',
            img : testimonialImage3
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'Florida,USA',
            img : testimonialImage4
        }
    ]
    return (
        <section className="container my-5 py-5" id="review"> 
            <div className="text-center">
                   <h5 className="text-uppercase font-color">Testimonial</h5>
                   <h1>What Our Clients Say</h1>
            </div> 
            <div className="card-deck mt-5">
                {
                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                }
            </div> 
        </section>
    );
};

export default Testimonials;