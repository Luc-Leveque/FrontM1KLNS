import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './Routes';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="row">
          <div className="myapp__container">

          </div>
        </div>
        <Routes/>
        <Footer/>
      </div>
  );
}

export default App;