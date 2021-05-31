import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main'
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setData(data));
  }, []);
  return (
    <div className='app'>
      <Header data={data}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
