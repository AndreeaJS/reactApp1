import React from 'react';
import './header&footer.scss';

const Footer = () => {
  return (
    <div className="pb-4 d-flex justify-content-center align-items-center flex-column">
      <div>Footer</div>
      <div className='copyright'>
        <a href="/home/program">Our program</a>
      </div>
      <div>
        <span className="copyright">
          © COPYRIGHT 2023 NAME | 
          <a href="/">  PROTECȚIA DATELOR</a> | 
          <a href="/">  COOKIE POLICY</a> | 
          <a href="/">  CONFIDENTIALITATEA DATELOR</a>
        </span>
      </div>
    </div>
  );
}

export default Footer;