import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';


const Event = () => (
  <div id="fh5co-event" className="fh5co-bg" style={{ backgroundImage: 'url(/static/images/img_bg_3.jpg)' }}>
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>Our Special Events</span>
          <h2>Wedding Events</h2>
        </ScrollAnimation>
      </div>
      <div className="row">
        <div className="display-t">
          <div className="display-tc">
            <div className="col-md-10 col-md-offset-1">
              <div className="col-md-6 col-sm-6 text-center">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce
                  className="event-wrap animate-box"
                >
                  <h3>Main Ceremony</h3>
                  <div className="event-col">
                    <i className="icon-clock" />
                    <span>13:00</span>
                    <span>15:00</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar" />
                    <span>Sobota 16.</span>
                    <span>Červen, 2018</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce
                  className="event-wrap animate-box"
                >
                  <h3>Wedding Party</h3>
                  <div className="event-col">
                    <i className="icon-clock" />
                    <span>17:00</span>
                    <span>22:00</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar" />
                    <span>Sobota 16.</span>
                    <span>Červen, 2018</span>
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Event;
