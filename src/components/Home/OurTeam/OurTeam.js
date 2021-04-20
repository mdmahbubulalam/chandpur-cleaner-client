import React from 'react';
import teamMember1 from '../../../images/team1.jpg';
import teamMember2 from '../../../images/team2.jpg';
import teamMember3 from '../../../images/team3.jpg';
import teamMember4 from '../../../images/team4.jpg';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Team from '../Team/Team';
import './OurTeam.css'



const OurTeam = () => {
    
        const teamData = [
            {
                name : 'Mickel Zaman',
                designation : 'Team Lead, House Cleaning Department',
                img : teamMember1,
                icon1:faPhone,
                icon2:faEnvelope,
                icon3:faFacebookF,
                icon4:faInstagram
            },
            {
                name : 'Paul Croves',
                designation : 'Team Lead, Office Cleaning Department',
                img : teamMember2,
                icon1:faPhone,
                icon2:faEnvelope,
                icon3:faFacebookF,
                icon4:faInstagram
            },
            {
                name : 'Ricardo Spencer',
                designation : 'Team Lead, Tank Cleaning Department',
                img : teamMember3,
                icon1:faPhone,
                icon2:faEnvelope,
                icon3:faFacebookF,
                icon4:faInstagram
            },
            {
                name : 'Marko Dugonji',
                designation : 'Team Lead, Furniture Cleaning Department',
                img : teamMember4,
                icon1:faPhone,
                icon2:faEnvelope,
                icon3:faFacebookF,
                icon4:faInstagram
            }
        ]
    return (
        <section className="container my-5 py-5" id="team"> 
             <div className="text-center">
                <h5 className="text-uppercase font-color">MEET OUR</h5>
                <h1>Amazing Team</h1>
            </div> 
            <div className="card-deck mt-5">
                {
                    teamData.map(team => <Team team={team} key={team.name}/>)
                }
            </div> 
        </section>
        
    );
};

export default OurTeam;