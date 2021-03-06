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
          <h2>Vítejte na naší svatbě!</h2>
          <p>
            Naši nejbližší a nejmilejší, jak už všichni víte, třetí červnová
            sobota bude naším velkým dnem, který bychom si přáli prožít
            a&nbsp;oslavit s vámi.
          </p>
          <h3>16. 6. 2018 Mlýn Kamenice - Klučenice, Česká republika</h3>
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        className="couple-wrap animate-box"
      >
        <div className="couple-half">
          <div className="groom">
            <img
              src="/static/images/r.jpg"
              alt="groom"
              className="img-responsive"
            />
          </div>
          <div className="desc-groom">
            <h3>Renča Schimmerová</h3>
          </div>
        </div>
        <p className="heart text-center">
          <i className="icon-heart2" />
        </p>
        <div className="couple-half">
          <div className="bride">
            <img
              src="/static/images/a.jpg"
              alt="groom"
              className="img-responsive"
            />
          </div>
          <div className="desc-bride">
            <h3>Aleš Jiránek</h3>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  </div>
);

export default Couple;
