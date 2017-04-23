import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const HowSection = () =>
  <section id="join-us" className="how bg-wheat section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-xs-center body-pad">
          <h4 className="section-heading">Be part of nurturing a dirt-free environment for you and your family</h4>
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xs-12 body-pad">
          <div className="col-md-6">
            <div className="service-col">
              <img className="picture" src={require('../../../img/apply.svg')} alt="Apply" />
              <h4 className="service-heading">Apply</h4>
              <p className="text-muted">When applying, volunteers state upfront what you are willing to do and to what extent. So nobody expects too much from you.
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfYdnwrxPt-di3buJBhFP-BavKuHOQBouE-nGAG1keJSi2aCA/viewform?c=0&w=1" target="_blank"><span className="text-primary">&nbsp;Click here to apply.</span></Link>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-col">
              <img className="picture" src={require('../../../img/nurture.svg')} alt="Nurture" />
              <h4 className="service-heading">Initiate</h4>
              <p className="text-muted">Any registered volunteer can
                <Link to="/partners"><span className="text-primary">&nbsp;propose a cleanup initiative</span></Link> at any location.
                &nbsp;Once agreed, volunteers around commit to making it a success
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-col">
              <img className="picture" src={require('../../../img/mentor.svg')} alt="Mentor" />
              <h4 className="service-heading">Mentor</h4>
              <p className="text-muted">
                <Link to="/volunteers" className="text-primary">Volunteers respond to calls</Link>
                &nbsp; for participation in initiatives as they see fit. <br />This is purely free will.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-col">
              <img className="picture" src={require('../../../img/community.svg')} alt="Community" />
              <h4 className="service-heading">Community</h4>
              <p className="text-muted">SaveNaija volunteers inspire one another through
                <Link to="/volunteers" className="text-primary">&nbsp; sharing success stories</Link>
                &nbsp; and offering helpful suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default HowSection;
