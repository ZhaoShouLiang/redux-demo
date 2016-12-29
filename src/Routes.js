import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Post from './Post';
import Home from './Home';
import App from './App';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/post" component={Post} />
        <Route path="/home" component={Home} />
        <Route path="/post/:id" component={Post} />

      </Router>
    );
  }
}

export default Routes;
