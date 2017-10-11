import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';


const Couple = () => (
  <div id="fh5co-couple">
    <div className="container">
      <div className="row">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <h2>Hello!</h2>
          <h3>16.6.2018 Mlýn Kamenice - Klučenice, Česká republika</h3>
          <p>We invited you to celebrate our wedding</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce className="couple-wrap animate-box">
        <div className="couple-half">
          <div className="groom">
            <img src="/static/images/groom.jpg" alt="groom" className="img-responsive" />
          </div>
          <div className="desc-groom">
            <h3>Aleš Jiránek</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
          </div>
        </div>
        <p className="heart text-center">
          <i className="icon-heart2"/>
        </p>
        <div className="couple-half">
          <div className="bride">
            <img src="/static/images/bride.jpg" alt="groom" className="img-responsive" />
          </div>
          <div className="desc-bride">
            <h3>Renata Schimmerová</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  </div>
);



export default Couple;
