import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Blog from './Blog';

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
  </main>
);

export default Main;
