import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Page2 from './Page2';

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route path='/page2' component={Page2}/>
    </Switch>
  </main>
);

export default Main;
