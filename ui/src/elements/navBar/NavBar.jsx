import React from 'react';
import '../navBar/NavBar.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const NavBar = () => {
    const options = [
        'Request for woking hours change',
        'Request for Remote Work', 
        'Request for personal data change'
      ];
    return (
        <nav className="backgr-color navbar navbar-expand-lg shadow">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Employee data</a>
                        </li>
                        <li className="nav-item">
                            <Dropdown className="backgr-color" 
                            options={options}  
                            placeholder="Workflows" 
                            controlClassName="nav-link dropdown-control" 
                            menuClassName="dropdown-menu-custom" />;
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Raports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Benefits</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Structure</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;