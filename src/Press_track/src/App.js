import React from 'react';

//import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';



 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar/>
      </BrowserRouter>
  );
}
export default App;
