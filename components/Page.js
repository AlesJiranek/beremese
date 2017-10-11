import React from 'react';
import Head from './Head';
import Navigation from './Navigation';

const App = ({ children }) => (
  <div id="page">
    <Head />
    <Navigation />
    {children}
  </div>
);


export default App;
