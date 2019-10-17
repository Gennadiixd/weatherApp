import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as I from '../../interfaces';
import Day from './view'

import { getWeatherForDayThunk } from '../../redux/modules/weather/actions';
const mapStateToProps = (state: I.IStore): I.IWeatherStore => {
    return {
        requestTime: state.weather.day.requestTime,
        data: state.weather.day.data,
        loading: state.weather.day.loading
    }
}

const mapDispathcToProps = (dispatch: Dispatch) => {
    return {
        getWeatherForDay: bindActionCreators(getWeatherForDayThunk, dispatch)
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Day)