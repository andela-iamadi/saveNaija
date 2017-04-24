import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const VolunteerSection = () =>
  <section id="what-we-do" className="volunteers bg-white">
    <div className="container">
      <div className="row profile">
        <div className="col-md-3 col-xs-12 single-volunteer">
          <img src={require('../../../img/yerima.jpg')} className="img-thumbnail picture hidden-xs" />
          <div>
            <h5 className="name">Yerima Fatima</h5>
            <p className="title">Trader</p>
            <p className="role">SaveNaija volunteer</p>
          </div>
        </div>
        <div className="col-md-9 col-xs-12">
          <div className="header">
            <h4>Would you prefer a consistently clean environment with equally clean neigbors?</h4>
            <p>SaveNaija helps regular people organize street cleaning campaigns and spread awareness of better hygiene habits.</p>
          </div>
          <div className="offset-md-6 col-md-6 col-xs-12">
            <div className="body-pad text-xs-right">
              <Link to="https://web.facebook.com/pg/official.savenaija/videos/" className="btn btn-wheat-outline">Show me what these campaigns are like</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default VolunteerSection;
