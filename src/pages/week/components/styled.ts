import styled from 'styled-components';
import { getBackground } from '../../../styles/background';

export const StyledFlex = styled.div`
    display: flex;
`

interface DayCardProps {
    weatherState: string;
}

export const DayBand = styled(StyledFlex) <DayCardProps>`
    background: ${props => getBackground(props.weatherState)};
    width: 100%;
    justify-content: center;
    padding: 0.5em 0em;
`;

export const WeekWrapper = styled(StyledFlex)`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;