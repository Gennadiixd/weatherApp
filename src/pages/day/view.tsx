import React, { useState, useEffect } from 'react';

import { getBigImgUrl } from '../../utils/imgService';
import Spinner from '../../components/spinner'
import * as I from '../../interfaces';
import * as CS from '../../components/componentsStyles';
import * as PS from './components/styled';


interface IDayProps extends I.IWeatherStore {
    getWeatherForDay: (requestTime: Date | undefined) => void;
}

const Day: React.FC<IDayProps> = ({ data, loading, requestTime, getWeatherForDay }) => {
    if (data instanceof Error) throw data
    const [weatherNow, setWeatherNow] = useState(data[0]);

    useEffect(() => {
        setWeatherNow(data[0]);
    }, [data]);

    useEffect(() => {
        getWeatherForDay(requestTime);
    }, []);

    if (loading) {
        return (
            <Spinner />
        )
    }

    const { weather_state_abbr, weather_state_name, the_temp, created } = weatherNow;
    let createdTime;
    if(created){
        createdTime = created.split('T')[1].slice(0, 5)
    }
    let temperature;
    if (the_temp) {
        temperature = Math.round(the_temp)
    }
    return (
        <PS.DayWrapper
            weatherState={weather_state_name}
        >
            <PS.Image src={getBigImgUrl(weather_state_abbr)}/>

            <PS.TemperatureBlock>
                {temperature}°
            </PS.TemperatureBlock>
            <PS.PlaceAndTimeBlock>
                {createdTime}
                <p>
                    Moscow, RF
                </p>
            </PS.PlaceAndTimeBlock>
        </PS.DayWrapper>
    );
}

export default Day