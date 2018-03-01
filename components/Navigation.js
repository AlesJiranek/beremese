import React from "react";
import Menu from "./Menu";

const Navigation = () => (
  <nav className="fh5co-nav" role="navigation">
    <div className="container">
      <div className="row">
        <div className="col-xs-2">
          {/* <div id="fh5co-logo"><a href="index.html">Svatba<strong>.</strong></a></div> */}
        </div>
        <div className="col-xs-10 text-right menu-1">
          <Menu />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
