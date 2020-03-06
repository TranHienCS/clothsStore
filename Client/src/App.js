import React from 'react';
import {BrowserRouter} from "react-router-dom";
import RouterURL from './components/router/routerURL.js';
import AdminRouter from './components/router/adminRouter.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
        <RouterURL></RouterURL>
    </BrowserRouter>
  );
}

export default App;
