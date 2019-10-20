import styled from 'styled-components';
import { getBackgroundCard } from '../../../styles/background';

interface WrapperProps {
    weatherState: string;
}

export const DayWrapper = styled.div <WrapperProps>`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const Image = styled.img`
    display: flex;
    max-width: 15em;
    maw-height: 15em;
    padding: 3em;
`;

export const TemperatureBlock = styled.div`
    display: flex;
    max-width: 15em;
    maw-height: 15em;
    padding: 2em;
    font-size: 2em;
`;

export const PlaceAndTimeBlock = styled.div`
    display: flex;
    max-width: 15em;
    flex-direction: column;
    align-items: center;
    maw-height: 15em;
    padding: 2em;
`;