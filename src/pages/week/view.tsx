import React, { useEffect } from 'react';

import { getImgUrl } from '../../utils/imgService';
import Spinner from '../../components/spinner'
import * as I from '../../interfaces';
import * as CS from '../../components/componentsStyles';
import * as PS from './components/styled';


interface IWeekProps extends I.IWeatherStore {
    getWeatherForWeek: (requestTime: Date | undefined) => void;
}

const Week: React.FC<IWeekProps> = ({ data, loading, requestTime, getWeatherForWeek }) => {
    if (data instanceof Error) throw data

    useEffect(() => {
        getWeatherForWeek(requestTime)
    }, []);

    const renderDays = () => {
        return data.map(day => {
            const {
                applicable_date,
                max_temp = 0,
                min_temp = 0,
                weather_state_abbr,
                weather_state_name,
                id = 0
            } = day;

            const date: Date = new Date(applicable_date)
            const dayNumber: number = date.getDate()
            const weekday: string = date.toLocaleString('default', { weekday: 'long' });
            const month: string = date.toLocaleString('default', { month: 'short' });

            const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
            const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
            return (
                <PS.DayBand
                    weatherState={weather_state_name}
                    key={id}
                >
                    <CS.DayCard>
                        <CS.DateBlock>
                            <CS.DayNameBlock>
                                {weekdayCapitalized}
                            </CS.DayNameBlock>
                            {`${dayNumber} ${monthCapitalized}`}
                        </CS.DateBlock>

                        <CS.WeatherBlock>
                            <CS.TemperatureBlock>
                                {Math.round(max_temp)} / {Math.round(min_temp)}
                            </CS.TemperatureBlock>
                            <CS.Image
                                src={getImgUrl(weather_state_abbr)}
                            />
                        </CS.WeatherBlock>
                    </CS.DayCard>
                </PS.DayBand>
            )
        })
    }

    if (loading) {
        return (
            <Spinner />
        )
    }

    return (
        <PS.WeekWrapper>
            {renderDays()}
        </PS.WeekWrapper>
    );
}

export default Week;