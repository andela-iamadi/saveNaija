import React, {PropTypes} from 'react';

const MainBannerSection = () =>
  <section id="intro" className="intro">
    <div className="overlay">
      <video autoPlay muted poster={require('../../../img/header-bg.jpg')} id="videobg" loop>
        <source src={require('../../../img/savenaija-video.mp4')} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your browser.
      </video>
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <div className="col-md-9 col-xs-12 banner-text">
              <div className="home-content body-pad">
                <h1><a href="http://www.investopedia.com/articles/personal-finance/072715/10-richest-most-successful-tech-geniuses.asp" target="_blank">
                  56.7% of all meaningful growth</a> in world economies are driven by ordinary citizens.
                </h1>
              </div>
            </div>
            <div className="offset-md-6 col-md-6 col-xs-12 muted-banner-desc">
              <div className="home-content body-pad place text-xs-right">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default MainBannerSection;
