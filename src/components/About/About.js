import React from 'react';
import Coach from '../Coach/Coach';
import './About.css';

const About = () => {
    return (
        // about page
        <div className="about-container">
            <h2 style={{marginBottom: '50px'}}>About <span style={{color: 'orangered'}}>Bengal Cricket</span> Academy:</h2>
            <h3 className="mb-3">Our Academy's All Coaches</h3>
            {/* show the Coach in about page */}
            <Coach></Coach>
        </div>
    );
};

export default About;