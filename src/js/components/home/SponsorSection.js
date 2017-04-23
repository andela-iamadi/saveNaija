import React, {PropTypes} from 'react';

const SponsorSection = () =>
  <section id="sponsor" className="bg-lighter-blue section sponsored-by">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-md-center body-pad">
          <h3>SaveNaija is proudly sponsored by</h3>
        </div>
        <div className="col-md-4 offset-md-4 col-xs-12">
          <a href="http://etisalat.com" target="_blank"><img className="andela-logo" src={require('../../../img/etisalat.png')} alt="etisalat" /></a>
        </div>
      </div>
    </div>
  </section>

export default SponsorSection;
