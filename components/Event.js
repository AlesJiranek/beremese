import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';

const Event = () => (
  <div
    id="fh5co-event"
    className="fh5co-bg"
    style={{ backgroundImage: 'url(/static/images/large__DSC1371-print.jpg)' }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>Náš svatební den</span>
          <h2>Nejdůležitejší události dne</h2>
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
                  <h3>Svatební Obřad</h3>
                  <div className="event-col">
                    <i className="icon-clock" />
                    <span>13:00</span>
                    <span>14:00</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar" />
                    <span>Sobota</span>
                    <span>16. Červen</span>
                  </div>
                  <p>
                    To nejdůležitější, a&nbsp;vlastně důvod našeho setkání, je
                    říci si své ano! Obřad proběhne<br />ve 13 hodin
                    v&nbsp;blízkosti mlýna, ve kterém bude poté i&nbsp;svatební
                    oslava. Netřeba tak velkého přesouvání, všude dojdeme po
                    svých.
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce
                  className="event-wrap animate-box"
                >
                  <h3>Svatební oslava</h3>
                  <div className="event-col">
                    <i className="icon-clock" />
                    <span>17:00</span>
                    <span>00:00</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar" />
                    <span>Sobota</span>
                    <span>16. Červen</span>
                  </div>
                  <p>
                    Aby naše láska trvala věčnost, chtěli bychom se s&nbsp;vámi
                    veselit po zbytek celého dne tak, aby se na náš den navždy
                    vzpomínalo! Párty bude zahájena v 17 hodin naším prvním
                    tancem a pak už se jen bude pít a hodovat.
                  </p>
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
