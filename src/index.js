import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './Routes.js';



ReactDOM.render(<Routes />,document.getElementById('root'));
