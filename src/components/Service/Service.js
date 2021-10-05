import React from 'react';

const Service = (props) => {
  // destructing data
    const {img, name, price} = props.service;
    return (
      // show data dynamically on services page
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top" style={{height: '365px'}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Training: {name}</h5>
              <h3 className="card-text" style={{fontWeight: '400'}}>Service Fee: ${price}</h3>
              <button type="button" className="btn btn-dark mt-3">Click To Join</button>
            </div>
          </div>
        </div>
    );
};

export default Service;