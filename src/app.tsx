import React from 'react';
import WeekBlock from './components/week-block';
import styled from 'styled-components';

// TODO: delete this cmp
const App: React.FC = () => {
  return (
    <AppWrapper>
      <div>
        <button>Today</button>
        <button>Week</button>
      </div>
      <WeekBlock />
    </AppWrapper>
  );
}

export default App;

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    padding: 30px 0px;
`;
