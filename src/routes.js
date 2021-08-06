import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { Items } from './components/Items';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />

      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
