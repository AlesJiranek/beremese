import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';

export default ({ children, bg = null, overlay = false }) => (
  <div
    id="fh5co-testimonial"
    className="fh5co-bg"
    style={bg ? { backgroundImage: `url("${bg}")` } : {}}
  >
    {overlay && (
      <div className="overlay" style={{ background: `rgba(0,0,0,0.04)` }} />
    )}
    <div className="container">
      <div className="row">{children}</div>
    </div>
  </div>
);

export const TextHeading = ({ children }) => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce className="row">
    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
      {children}
    </div>
  </ScrollAnimation>
);

export const TextContent = ({ children }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="wrap-testimony">
        <div className="testimony-slide active text-center">{children}</div>
      </div>
    </div>
  </div>
);
