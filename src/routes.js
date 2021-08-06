import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Navbar from './components/Navbar';
import byNameItems from './components/byName';
import byFullName from './components/byFullName';
import byCode from './components/byCode';
import byCodeList from './components/byListOfCodes';
import byCurrency from './components/byCurrency';
import byLanguage from './components/byLanguage';
import byCapital from './components/byCapital';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/byname" component={byNameItems} />
        <Route path="/byfullname" component={byFullName} />
        <Route path="/bycode" component={byCode} />
        <Route path="/bycodelist" component={byCodeList} />
        <Route path="/bycurrency" component={byCurrency} />
        <Route path="/bylanguage" component={byLanguage} />
        <Route path="/bycapital" component={byCapital} />

      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
