import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { getWeatherForWeekThunk } from '../../redux/modules/weather/actions';
import { getImgUrl } from '../../utils/imgService';
import * as I from '../../interfaces';
import * as S from '../../styles/componentsStyles';

//TODO: gather all interfaces in one place
interface IWeekProps extends I.IWeatherStore {
    getWeatherForWeek: () => void;
}

const Week: React.FC<IWeekProps> = ({ data, loading, requestTime, getWeatherForWeek }) => {
    useEffect(() => {
        //TODO: remove condition with date to middleware
        if (requestTime && (new Date().getSeconds() - requestTime.getSeconds() < 10)) {
            return;
        } else {
            getWeatherForWeek()
        }
    }, []);

    const renderDays = () => {
        if (data instanceof Error) throw data

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
                <S.DayBand
                    weatherState={weather_state_name}
                    key={id}
                >
                    <S.DayCard>
                        <S.DateBlock>
                            <S.DayNameBlock>
                                {weekdayCapitalized}
                            </S.DayNameBlock>
                            {`${dayNumber} ${monthCapitalized}`}
                        </S.DateBlock>

                        <S.WeatherBlock>
                            <S.TemperatureBlock>
                                {Math.round(max_temp)} / {Math.round(min_temp)}
                            </S.TemperatureBlock>
                            <S.Image
                                src={getImgUrl(weather_state_abbr)}
                            />
                        </S.WeatherBlock>
                    </S.DayCard>
                </S.DayBand>
            )
        })
    }

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <S.WeekWrapper>
            {renderDays()}
        </S.WeekWrapper>
    );
}

const mapStateToProps = (state: I.IStore): I.IWeatherStore => {
    return {
        requestTime: state.weather.week.requestTime,
        data: state.weather.week.data,
        loading: state.weather.week.loading
    }
}

const mapDispathcToProps = (dispatch: Dispatch) => {
    return {
        getWeatherForWeek: bindActionCreators(getWeatherForWeekThunk, dispatch)
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Week)

//TODO: do smth with AppBlock styles it not DRY
//TODO: styles
//TODO: interfaces to one file

// interface DayCardProps {
//     weatherState: string;
// }

// const WeekWrapper = styled(StyledFlex)`
//     height: 100%;
//     width: 100%;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding-top: 30px;
// `;

// const DayBand = styled(StyledFlex) <DayCardProps>`
//     background: ${props => getBackground(props.weatherState)};
//     width: 100%;
//     justify-content: center;
//     padding: 0.5em 0em;
// `;

// const DayCard = styled(StyledFlex)`
//     width: 100%;
//     height: 100%;
//     position: relative;
//     width: 25em;
//     justify-content: space-between;
// `;

// const Image = styled.img`
// `;

// const DateBlock = styled(StyledFlex)`
//     flex-direction: column;
//     justify-content: center;
// `;

// const DayNameBlock = styled(StyledFlex)`

// `;

// const WeatherBlock = styled(StyledFlex)`

// `;

// const TemperatureBlock = styled(StyledFlex)`
//     justify-content: center;
//     align-items: center;
//     padding-right: 20px;
// `;

// const Button = styled.button`

// `;