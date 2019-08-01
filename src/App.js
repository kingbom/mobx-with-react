import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileMobx from "./components/ProfileMobx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/profile-mobx" component={ProfileMobx} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  } 
};
export default App; 
