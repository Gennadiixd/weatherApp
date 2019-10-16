import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';


import { setFuncThunk } from '../../redux/modules/weather/actions';
import weatherService from '../../api/weather-service';
import { StyledFlex } from '../../styles/styled-flex';
import { getImgUrl } from '../../utils/imgService';
import { getBackground } from '../../styles/background';
//TODO: gather all interfaces in one place
interface IDay {
    applicable_date: string;
    weather_state_abbr: string;
    weather_state_name: string;
    max_temp: number;
    min_temp: number;
    id: number;
}

export interface IStore {
    loading: boolean,
    data: IWeek | Error
}

interface IWeather {
    weather: IStore
}

interface IWeek extends Array<IDay> { }

interface IWeatherResponse {
    consolidated_weather: IWeek
}

interface IWeekProps {
    loading: boolean;
    data: any;
    setFunc: () => void;
}


interface DispatchProps {
    setFunc: () => void;
}

const Week: React.FC<IWeekProps> = (props) => {
    const [weatherForWeek, setWeatherForWeek] = useState<IWeek>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        // setFunc()
        // setLoading(true);
        // weatherService.getWeatherForWeek()
        //     .then((data: IWeatherResponse) => {
        //         setWeatherForWeek(data.consolidated_weather);
        //         setLoading(false);
        //     });
    }, []);

    console.log(props)

    const renderDays = () => {
        return weatherForWeek.map(day => {
            const {
                applicable_date,
                max_temp,
                min_temp,
                weather_state_abbr,
                weather_state_name,
                id
            } = day;

            const date: Date = new Date(applicable_date)
            const dayNumber: number = date.getDate()
            const weekday: string = date.toLocaleString('default', { weekday: 'long' });
            const month: string = date.toLocaleString('default', { month: 'short' });

            const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
            const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

            return (
                <DayBand
                    weatherState={weather_state_name}
                    key={id}
                >
                    <DayCard>
                        <DateBlock>
                            <DayNameBlock>
                                {weekdayCapitalized}
                            </DayNameBlock>
                            {`${dayNumber} ${monthCapitalized}`}
                        </DateBlock>

                        <WeatherBlock>
                            <TemperatureBlock>
                                {Math.round(max_temp)} / {Math.round(min_temp)}
                            </TemperatureBlock>
                            <Image
                                src={getImgUrl(weather_state_abbr)}
                            />
                        </WeatherBlock>
                    </DayCard>
                </DayBand>
            )
        })
    }

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <WeekWrapper>
            {renderDays()}
        </WeekWrapper>
    );
}

const mapStateToProps = (state: IWeather): IStore => {
    return {
        data: state.weather.data,
        loading: state.weather.loading,
    }
}

const mapDispathcToProps = (dispatch: any) => {
    return {
        setFunc: () => dispatch(setFuncThunk())
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Week)

//TODO: do smth with AppBlock styles it not DRY
//TODO: styles
//TODO: interfaces to one file

interface DayCardProps {
    weatherState: string;
}

const WeekWrapper = styled(StyledFlex)`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

const DayBand = styled(StyledFlex) <DayCardProps>`
    background: ${props => getBackground(props.weatherState)};
    width: 100%;
    justify-content: center;
    padding: 0.5em 0em;
`;

const DayCard = styled(StyledFlex)`
    width: 100%;
    height: 100%;
    position: relative;
    width: 25em;
    justify-content: space-between;
`;

const Image = styled.img`
`;

const DateBlock = styled(StyledFlex)`
    flex-direction: column;
    justify-content: center;
`;

const DayNameBlock = styled(StyledFlex)`

`;

const WeatherBlock = styled(StyledFlex)`

`;

const TemperatureBlock = styled(StyledFlex)`
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

const Button = styled.button`

`;