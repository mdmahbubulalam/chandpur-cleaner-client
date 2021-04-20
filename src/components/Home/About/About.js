import React from 'react';
import aboutImage from '../../../images/about.jpg'
import '../HeaderMain/HeaderMain.css';

const About = () => {
    return (
        <div className="container py-5 my-5" id="about">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <img src={aboutImage} className="img-fluid rounded" alt=""/>
                </div>
                <div className="col-md-6">
                    <h5 className="text-title">WELCOME TO OUR COMPANY</h5>
                    <h1 >About Us</h1>
                    <p className="my-3 text-muted">
                        Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id
						erat eu ullamcorper. Nunc id ipsum fringilla,
						gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia
                    </p>
					<p className="text-muted">
                        Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu
						Ullamcorper.Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in
						culpa quis. Phasellus lacinia
                    </p>
                    <a role="button" class="btn btn-warning" href="#service">Read More</a>
                </div>
            </div>      
        </div>
    );
};

export default About;