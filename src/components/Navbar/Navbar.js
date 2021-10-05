import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      // navbar desigh
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-background-color">
          <div className="container-fluid">
            <div className="navbar-brand">
                <img src="https://www.seekpng.com/png/full/330-3304606_clip-art-freeuse-cricket-drawing-royalty-free-cartoon.png" alt="" width="42" height="34" style={{marginLeft: '30px'}} />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{marginLeft: '28%'}}>
                <li className="nav-item">
                  <NavLink className="nav-link" style={{marginLeft: '30px', fontWeight: '600', fontSize: '20px'}} activeStyle={{color: 'tomato', fontSize: '20px', fontWeight: '600'}} aria-current="page" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={{marginLeft: '30px', fontWeight: '600', fontSize: '20px'}} activeStyle={{color: 'tomato', fontSize: '20px', fontWeight: '600'}} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={{marginLeft: '30px', fontWeight: '600', fontSize: '20px'}} activeStyle={{color: 'tomato', fontSize: '20px', fontWeight: '600'}} to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" style={{marginLeft: '30px', fontWeight: '600', fontSize: '20px'}} activeStyle={{color: 'tomato', fontSize: '20px', fontWeight: '600'}} to="/free/join">Free Join</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;