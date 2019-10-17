import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import * as S from './components/componentsStyles'
import Week from './pages/week';
import Day from './pages/day';

export default function Routes() {
  return (
    <S.AppWrapper>
      <BrowserRouter>
        <div>
          <Link to="/today">
            Today
          </Link>
          <Link to="/">
            Week
          </Link>
        </div>
        <Switch>
          <Route path="/" exact component={Week} />
          <Route path="/today" exact component={Day} />
        </Switch>
      </BrowserRouter>
    </S.AppWrapper>
  )
}