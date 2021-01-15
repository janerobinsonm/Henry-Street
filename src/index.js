import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import GoodNFull from './components/GoodNFull';
import 'leaflet/dist/leaflet.css'


ReactDOM.render(
  <Router>
    <GoodNFull />
  </Router>,
  document.getElementById('root')
);
