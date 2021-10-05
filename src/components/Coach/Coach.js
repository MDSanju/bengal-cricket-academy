import React from 'react';

const Coach = () => {
    return (
      // three coach field
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-0 coach-details">
          <div className="col">
            <div className="card">
              <img src="https://st1.latestly.com/wp-content/uploads/2019/07/Steve-Rhodes-2-781x441.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Coach Name: John Mosh</h5>
                <p className="card-text">I am Mr. John Mosh. I am the Batting coach of the Bengal cricket academy.</p>
                <button type="button" className="btn btn-dark mt-3">More Details</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://cdn.insidesport.co/wp-content/uploads/2020/10/30095222/2020-10-29-2-3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Coach Name: Shon Lee</h5>
                <p className="card-text">I am Mr. Shon Lee. Cricket is funny game. I am the fielding coach of the Bengal cricket academy.</p>
                <button type="button" className="btn btn-dark mt-3">More Details</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/08/gettyimages-1328316910-1-1629270520.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Coach Name: Mac Kayle</h5>
                <p className="card-text">I ma Mr. Mac Kayle. I am a fast bowler and the main bowling coach of the Bengal cricket academy.</p>
                <button type="button" className="btn btn-dark mt-3">More Details</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Coach;