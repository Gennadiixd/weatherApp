import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  background: #3498db;
  &.active {
    background: transparent;
    color: black;
  }
`;

export const StyledFlex = styled.div`
    display: flex;
`

export const DayCard = styled(StyledFlex)`
    position: relative;
    width: 25em;
    justify-content: space-between;
`;

export const Image = styled.img`
    max-width: 5em;
`;

export const DateBlock = styled(StyledFlex)`
    flex-direction: column;
    justify-content: center;
`;

export const DayNameBlock = styled(StyledFlex)`

`;

export const WeatherBlock = styled(StyledFlex)`

`;

export const TemperatureBlock = styled(StyledFlex)`
    align-items: center;
    padding-right: 20px;
`;

export const ButtonBlock = styled.div`
    display: flex;
    max-width: 300px;
    height: 100%;
    position: relative;
    width: 25em;
    justify-content: space-between;
`;