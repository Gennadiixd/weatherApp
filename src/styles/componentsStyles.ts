import styled from 'styled-components';

import { getBackground } from './background';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F9F9F9;
    padding: 30px 0px;
`;


export const StyledFlex = styled.div`
    display: flex;
`
interface DayCardProps {
    weatherState: string;
}

export const WeekWrapper = styled(StyledFlex)`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const DayBand = styled(StyledFlex) <DayCardProps>`
    background: ${props => getBackground(props.weatherState)};
    width: 100%;
    justify-content: center;
    padding: 0.5em 0em;
`;

export const DayCard = styled(StyledFlex)`
    width: 100%;
    height: 100%;
    position: relative;
    width: 25em;
    justify-content: space-between;
`;

export const Image = styled.img`
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
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

export const Button = styled.button`

`;