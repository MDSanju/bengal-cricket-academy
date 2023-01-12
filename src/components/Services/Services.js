import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    // use state hook
    const [services, setServices] = useState([]);
    console.log(services, "Data got");

    // use effect for doing fetch
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        // get data and do map on array
        <div style={{marginTop: '125px', marginBottom: '180px'}}>
            <h1 style={{fontSize: '60px'}}>O<span style={{color: 'yellow'}}>U</span>R SERV<span style={{color: 'yellow'}}>I</span>CES</h1>
            <p style={{marginBottom: '45px', fontSize: '20px'}}>Cricket is the gentleman's game. And we provide the best cricket services in Khulna Cricket!</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-0">
                {/* array map */}
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;