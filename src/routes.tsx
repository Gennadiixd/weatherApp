import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavButtons from './components/navButtons';
import AppWrapper from './components/appWrapper';
import Week from './pages/week';
import Day from './pages/day';
import WithDropdown from './pages/withDropDown';

export default function Routes() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <NavButtons/>
        <Switch>
          <Route path="/dropdown" exact component={WithDropdown} />
          <Route path="/week" exact component={Week} />
          <Route path="/today" exact component={Day} />
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  )
}