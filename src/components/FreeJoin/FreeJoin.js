import React from 'react';
import './FreeJoin.css';

const FreeJoin = () => {
    return (
        // free join page
        <div className="free-join">
            <h2>Registration <span style={{color: 'orangered'}}>Here</span></h2>
            <input type="email" name="" id="" placeholder="Put your email" />
            <br /><br />
            <input type="password" name="" id="" placeholder="Write your password" />
            <br /><br />
            <button type="submit">Submit</button>
        </div>
    );
};

export default FreeJoin;