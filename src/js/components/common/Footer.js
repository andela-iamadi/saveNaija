import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  let currentYear = (new Date()).getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <span className="copyright">
              <img src={require('../../../img/savenaija-logo-small.png')} alt="Site Logo" />Copyright &copy; SaveNaija ({currentYear}). All Rights Reserved
            </span>
          </div>
          <div className="offset-sm-11">
            <a href="https://www.facebook.com/Teencode-Africa-1345535292156762/" target="_blank"><i className="fa fa-facebook-square fa-2x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
