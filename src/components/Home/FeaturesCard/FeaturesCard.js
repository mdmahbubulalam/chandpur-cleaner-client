import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureCard.css'

const FeaturesCard = ({feature}) => {
    return (
        <div className="col-md-4">
            <div className={`feature-${feature.background}`}>
                <div className="text-center">
                    <FontAwesomeIcon className="feature-icon" icon={feature.icon} />
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                </div> 
            </div>     
        </div>
    );
};

export default FeaturesCard;