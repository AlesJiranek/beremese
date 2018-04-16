import React from 'react';
import ScrollAnimation from '../lib/ScrollAnimation';

const Header = ({
  backgroundImage,
  children,
  small = false,
  overlay = 0.4
}) => (
  <header
    id="fh5co-header"
    className={`fh5co-cover${small ? ' fh5co-cover-sm' : ''}`}
    role="banner"
  >
    <div className="overlay" style={{ background: `rgba(0,0,0,${overlay})` }} />
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="display-t">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOnce
              className="display-tc animate-box"
              offset={200}
            >
              {children}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
