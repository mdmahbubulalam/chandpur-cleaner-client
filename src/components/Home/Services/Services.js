import React, { useEffect, useState } from 'react';
import { faHome, faLaptopHouse, faCouch , faFaucet} from '@fortawesome/free-solid-svg-icons'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <section className="service-bg py-5 my-5 " id="service">
            <div className="container">
                <div className="row">
                    <div className="text-center p-5">
                        <h5 className="text-title">OUR SERVICES</h5>
                        <h1>We Providing A High Quality Services</h1>
                    </div>
                </div>
                <div className="row">
                        {
                            services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                        }
                </div>    
            </div>
        </section>
    );
};

export default Services;