import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as I from '../../interfaces';
import Week from './view'
import { getWeatherForWeekThunk } from '../../redux/modules/weather/actions';

const mapStateToProps = (state: I.IStore): I.IWeatherStore => {
    return {
        requestTime: state.weather.week.requestTime,
        data: state.weather.week.data,
        loading: state.weather.week.loading
    }
}
const mapDispathcToProps = (dispatch: Dispatch) => {
    return {
        getWeatherForWeek: bindActionCreators((requestTime: Date | undefined) => getWeatherForWeekThunk(requestTime), dispatch)
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(Week)