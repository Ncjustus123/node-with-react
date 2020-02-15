import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
            <Link to="/" className="navbar-brand">ExerciseTracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" ar-a-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav flex-grow-1">
               <li className="navbar-item">
                   <Link to="/" className="nav-link">Exercises</Link>
               </li>
               <li className="navbar-item">
                   <Link to="/create" className="nav-link">Create Exercise Log</Link>
               </li>
               <li className="navbar-item">
                   <Link to="/user" className="nav-link">Create user</Link>
               </li>
            </ul>
            </div>
            </div>
        </nav>
          
      );
    }
}