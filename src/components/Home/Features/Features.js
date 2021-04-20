import React from 'react';
import FeaturesCard from '../FeaturesCard/FeaturesCard';
import { faBath, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons'


const Features = () => {
    const featuresData = [
        {
            icon:faBath,
            title: 'Best Quality',
            description : 'Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.',
            background : 'lightgray'
        },

        {
            icon:faCogs,
            title: 'Expert Advice',
            description : 'Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.',
            background : 'orange'
        },

        {
            icon:faUsers,
            title: 'Labour Expertise',
            description : 'Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.',
            background : 'lightgray'
        }
    ]
    return (
        <div className="container my-5 py-5">
            <section className="row">
                {
                    featuresData.map(feature => <FeaturesCard feature={feature}></FeaturesCard>)
                }
            </section>
        </div>
       
    );
};

export default Features;