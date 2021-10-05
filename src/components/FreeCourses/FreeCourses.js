import React from 'react';
import { useHistory } from 'react-router';
import './FreeCourses.css';
// use history hook
const FreeCourses = () => {
    const freeCourses = useHistory();
// onClick handler for the button
    const freeJoin = () => {
        freeCourses.push('/free/join');
    }
    return (
      // free courses fields
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{marginBottom: '65px'}}>
            <div className="card mb-3" style={{maxWidth: '640px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://resources.platform.pulselive.com/ecb/photo/2016/10/26/dff12ca4-c43e-4ae8-9ad2-0704b8496d98/GettyImages-618267884.jpg" className="img-fluid rounded-start" style={{height: '100%'}} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Join to our free courses!</h5>
                    <p className="card-text">Click the button below to join our 100% free courses right now. This is a big chance for you! Just click the button, and registration there.</p>
                    <button type="button" className="btn btn-dark" onClick={freeJoin}>Our Free Courses</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default FreeCourses;