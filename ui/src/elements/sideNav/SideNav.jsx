import React, { useState } from 'react';
import "./SideNav.scss"
const SideNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const closeNav = () => {
      setIsNavOpen(!isNavOpen)
      console.log("isNavOpen: ", isNavOpen) 
    }


    return (
      <div className={`ms-3 w-25 d-flex flex-column justify-content-center ${isNavOpen}`} id="Sidenav">
        {(isNavOpen) === true && 
          <>
            <a href="/home">About</a>
            <a href="/home">Services</a>
            <a href="/home">Clients</a>
            <a href="/home">Contact</a>
          </>
        }
        <button className="mt-3 btn btn-close d-flex align-self-center blue" onClick={closeNav}></button>
      </div>
    );
}

export default SideNav;