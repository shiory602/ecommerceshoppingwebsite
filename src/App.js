import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <h2>banner</h2>
        </div>
        <div className="row">
          <h2>main</h2>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
        <div className="row">
          <h1>feature</h1>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
