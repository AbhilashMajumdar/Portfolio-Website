import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3 px-3">
                <div className="container-fluid">
                    <Link className="navbar-brand des-nav" to="/">About Me</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                                <Link className="nav-link active navbar-brand" aria-current="page" to="/Educational_details">Educational Details</Link>
                            </li> 
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                                <Link className="nav-link active navbar-brand" aria-current="page" to="/Technical_skills">Technical Skills</Link>
                            </li> 
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                                <Link className="nav-link active navbar-brand" aria-current="page" to="/Projects">Projects</Link>
                            </li> 
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                            <Link className="nav-link active navbar-brand" aria-current="page" to="/Certificates">Certificates</Link>
                            </li> 
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                                <Link className="nav-link active navbar-brand" aria-current="page" to="/Achievements">Achievements</Link>
                            </li> 
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item des-nav">
                                <Link className="nav-link active navbar-brand" aria-current="page" to="/Others">Personal Informations</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navber
