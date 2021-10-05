import React from 'react';
import FreeCourses from '../FreeCourses/FreeCourses';
import ServicePosts from '../ServicePosts/ServicePosts';
import './Home.css';

const Home = () => {
    return (
        // home page design
        <div>
            <h1 style={{marginTop: '85px', marginBottom: '30px', fontSize: '40px'}}>Our Free Services!</h1>
            {/* free coarse field */}
            <FreeCourses></FreeCourses>
            <div style={{marginBottom: '110px'}}>
                <h1 style={{fontSize: '60px'}}>SERV<span style={{color: 'yellow'}}>I</span>CES</h1>
                <p style={{marginBottom: '30px', fontSize: '20px'}}>Cricket is the gentleman's game. And we provide the best cricket services in Khulna Cricket!</p>
                {/* four data show */}
                <ServicePosts></ServicePosts>
            </div>
        </div>
    );
};

export default Home;