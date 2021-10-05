import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    // useHistoty hook
    const goToServicesPage = useHistory();
// button onClick handler
    const servicesPage = () => {
        goToServicesPage.push('/services');
    }
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            {/* header */}
            <div className="header-container">
                <div className="header">
                    <h1 style={{textAlign: 'left', fontSize: '60px', fontWeight: '800', paddingTop: '85px', paddingLeft: '24px'}}>Bengal Cricket Academy</h1>
                    <p style={{textAlign: 'left', fontSize: '24px', paddingLeft: '25px'}}>Cricket training academy as well as fitness care club best in khulna!</p>
                    <button onClick={servicesPage}>Admit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;