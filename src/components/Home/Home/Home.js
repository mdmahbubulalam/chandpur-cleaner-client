import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Features />
            <About />
            <Services />
            <Testimonials />
            <OurTeam/>
            <Contact/>
            <Footer />
        </div>
    );
};

export default Home;