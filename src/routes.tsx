import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Week from './pages/week';
import Day from './pages/day';

export default function Routes() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  )
}

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    padding: 30px 0px;
`;
