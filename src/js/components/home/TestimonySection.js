import React from 'react';
import { Link } from 'react-router';

class TestimonySection extends React.Component {
  constructor(props, context){
    super(props);
  }

  render() {
    return (
      <section id= "testimonials" className="testimony">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <div className="col-md-11 col-xs-12">
                  <h2>
                    “My children fall ill frequently because the gutter closest to our house is stagnant.
                    After our first SaveNaija street cleanup last saturday, neigbors have committed to making it regular. I can’t be happier! ”
                  </h2>
                  <p className="testifier">Rukayat Oseni</p>
                  <p className="location">Trader<br/>Airforce base, Kano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
     
export default TestimonySection;
