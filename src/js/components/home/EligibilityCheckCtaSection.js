import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const EligibilityCheckCtaSection = (checkEligibility) =>
  <section id="cta" className="cta">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-xs-12">
          <h3 className="action">What would you do for a more hygienic environment for you and your family?</h3>
        </div>
        <div className="col-md-3 col-xs-12 text-md-right">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfYdnwrxPt-di3buJBhFP-BavKuHOQBouE-nGAG1keJSi2aCA/viewform?c=0&w=1" target="_blank" className="btn btn-action" >Join the movement now</Link>
        </div>
      </div>
    </div>
  </section>

export default EligibilityCheckCtaSection;
