import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from './components/router/routerURL.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <RouterURL></RouterURL>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
