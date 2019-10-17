import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import * as S from './components/componentsStyles'
import Week from './pages/week';
import Day from './pages/day';
// TODO: set background for whole app
export default function Routes() {
  return (
    <S.AppWrapper>
      <BrowserRouter>
        <S.ButtonBlock>
          <S.Button>
            <NavLink to="/today">
              Today
            </NavLink>
          </S.Button>
          <S.Button>
            <NavLink to="/">
              Week
            </NavLink>
          </S.Button>
        </S.ButtonBlock>
        <Switch>
          <Route path="/" exact component={Week} />
          <Route path="/today" exact component={Day} />
        </Switch>
      </BrowserRouter>
    </S.AppWrapper>
  )
}