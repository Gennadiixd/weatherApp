import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Week from './components/week-block'
import Day from './components/day-block'

export default function Routes() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <div>
          <Link
            to="/today"
          >
            Today
          </Link>
          <Link
            to="/"
          >
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

const getBackground = (stateOfWeather: string): string => {
  if ((/Cloud/).test(stateOfWeather) || (/Rain/).test(stateOfWeather)) {
    return `#EAEAEA`;
  } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather)) {
    return `#FFF7E0`;
  } else {
    return ``;
  }
}

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    padding: 30px 0px;
`;
