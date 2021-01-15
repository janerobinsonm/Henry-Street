import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import GoodNFull from './components/GoodNFull';


ReactDOM.render(
  <Router>
    <GoodNFull />
  </Router>,
  document.getElementById('root')
);
