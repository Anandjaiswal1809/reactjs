import React, { Component } from 'react';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import './App.css';
// import Greet from './components/Greet';
import Header from './components/Header';
import Medications from './components/Medications';
import Health from './components/Health';
// import Choose from './components/demoslide';
import Choose from './components/Choose';

import Promise from './components/Promise';
import Footer from './components/Footer';


class App extends Component {
  render() {
  return (
    <div className="App">
          <Header />
          {/* <Greet /> */}
          <Medications />
          <Health />
          <demoslide />
          
          <Choose />
          <Promise />
          <Footer />
          
        
    </div>
  );
}
}

export default App;
