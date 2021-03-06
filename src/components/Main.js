import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Events from './Events/';
import Blog from './Blog/';
import Pokemon from './Pokemon/';

import styles from './main.scss';

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/pokemon' component={Pokemon}/>
    </Switch>
  </main>
);

export default Main;
