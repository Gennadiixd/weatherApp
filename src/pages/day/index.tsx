import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyledFlex } from '../../styles/styled-flex';
import weatherService from '../../api/weather-service';
import { getBackground } from '../../styles/background';

const Day: React.FC = () => {
    const [weatherForToday, setWeatherForToday] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true);
        weatherService.getWeatherForToday()
            .then((data: any) => {
                console.log(data)
                setWeatherForToday(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>

        </div>
    );
}

export default Day;


interface DayWrapperProps {
    weatherState: string;
}

const DayWrapper = styled(StyledFlex) <DayWrapperProps>`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    background: ${props => getBackground(props.weatherState)};
`;

const Image = styled.img`
`;