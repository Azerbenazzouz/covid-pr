import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    act=()=>{}
    render() { 
        return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-up">
            <Link className="navbar-brand" to="/"><img src='/corona-icon.svg'/>Covid-19</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                
                    <Link className="nav-item nav-link" to="/">Home </Link>
                    <Link className="nav-item nav-link" to="/Countries">Countries </Link>
                    <Link className="nav-item nav-link" to="/about">About </Link>
                </div>
            </div>
        </nav>
        );
    }
}
 
export default NavBar;