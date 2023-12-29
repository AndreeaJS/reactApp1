import React from 'react';
import profileIcon from "../../images/profile-icon.png";

const Content = () => {
    return (
      <div className="content w-75 d-flex justify-content-center">
        <div className="card shadow rounded-pill backgr-color w-75">
          <div className="card-body d-flex justify-content-space-around">
            <img className="logo1" src={profileIcon} alt="Not found"/>
            <div>
              <h5 className="card-title">Personal info</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Employee name</h6>
              <span className="card-text">Job and domain </span> |  
              <span className="card-text">  Phone number</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Content;