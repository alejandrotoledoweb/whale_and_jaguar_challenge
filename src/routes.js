import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Navbar from './components/Navbar';
import ByNameItems from './components/ByName';
import ByFullName from './components/ByFullName';
import ByCode from './components/ByCode';
import ByCodeList from './components/ByListOfCodes';
import ByCurrency from './components/ByCurrency';
import ByLanguage from './components/ByLanguage';
import ByCapital from './components/byCapital';
import ByCallingCode from './components/ByCallingCode';
import ByRegion from './components/ByRegion';
import ByRegionalBloc from './components/ByRegionalBloc';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/byname" component={ByNameItems} />
        <Route path="/byfullname" component={ByFullName} />
        <Route path="/bycode" component={ByCode} />
        <Route path="/bycodelist" component={ByCodeList} />
        <Route path="/bycurrency" component={ByCurrency} />
        <Route path="/bylanguage" component={ByLanguage} />
        <Route path="/bycapital" component={ByCapital} />
        <Route path="/bycallingcode" component={ByCallingCode} />
        <Route path="/byregion" component={ByRegion} />
        <Route path="/byregionalbloc" component={ByRegionalBloc} />

      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
