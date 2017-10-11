import React from 'react';
import Countdown from './Countdown';
import ScrollAnimation from '../lib/ScrollAnimation';


const Header = () => (
  <header id="fh5co-header" className="fh5co-cover" role="banner" style={{ backgroundImage: 'url(/static/images/img_bg_2.jpg)' }} data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="display-t">
            <ScrollAnimation animateIn="fadeIn" animateOnce className="display-tc animate-box">
              <h1>Renča &amp; Aleš</h1>
              <h2>Budou mít svatbu</h2>
              <Countdown date="2018-06-16" />
              <p><a href="/static/Svatba-Renca-Ales.ics" className="btn btn-default btn-sm" target="_blank">Uložit datum</a></p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
