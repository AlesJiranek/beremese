import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';


const Story = () => (
  <div id="fh5co-couple-story">
    <div className="container">
      <div className="row">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"
        >
          <span>We Love Each Other</span>
          <h2>Our Story</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </ScrollAnimation>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ScrollAnimation animateIn="fadeInUp" animateOnce component="ul" className="timeline animate-box">
            <ScrollAnimation animateIn="fadeInUp" animateOnce component="li" className="animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(/static/images/couple-1.jpg)'}} />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">First We Meet</h3>
                  <span className="date">December 25, 2015</span>
                </div>
                <div className="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce component="li" className="timeline-inverted animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(/static/images/couple-2.jpg)' }} />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">First Date</h3>
                  <span className="date">December 28, 2015</span>
                </div>
                <div className="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce component="li" className="animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(/static/images/couple-3.jpg)' }} />
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">In A Relationship</h3>
                  <span className="date">January 1, 2016</span>
                </div>
                <div className="timeline-body">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </div>
);


export default Story;
