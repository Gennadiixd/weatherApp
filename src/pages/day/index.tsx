import React, { useState, useEffect } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getWeatherForDayThunk } from '../../redux/modules/weather/actions';
import * as I from '../../interfaces';
import * as S from '../../styles/componentsStyles';


interface IDayProps extends I.IWeatherStore {
    getWeatherForDay: (requestTime: Date | undefined) => void;
}

const Day: React.FC<IDayProps> = ({ data, loading, requestTime, getWeatherForDay }) => {

    useEffect(() => {
        getWeatherForDay(requestTime);
    }, []);

    return (
        <div>

        </div>
    );
}

const mapStateToProps = (state: I.IStore): I.IWeatherStore => {
    return {
        requestTime: state.weather.day.requestTime,
        data: state.weather.day.data,
        loading: state.weather.day.loading
    }
}

const mapDispathcToProps = (dispatch: Dispatch) => {
    return {
        getWeatherForDay: bindActionCreators((requestTime: Date | undefined) => getWeatherForDayThunk(requestTime), dispatch)
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Day)