import React from "react";
import Head from "./Head";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Footer from "./Footer";

const App = ({ children }) => (
  <div id="page">
    <Head />
    <MobileNavigation />
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default App;
