import { Dispatch } from 'redux';
import * as I from '../../../interfaces';
import * as C from './consts';
import weatherService from '../../../api/weather-service';

export const fetchWeatherWeek = (): I.IAction => {
    return {
        type: C.FETCH_WEEK_SENDED
    }
}

export const receiveWeatherWeek = (data: I.IWeatherResponse): I.IAction => {
    return {
        type: C.RESPOND_WEEK_RCVD,
        payload: data
    }
}

export const fetchWeatherDay = (): I.IAction => {
    return {
        type: C.FETCH_DAY_SENDED
    }
}

export const receiveWeatherDay = (data: I.IWeatherResponse): I.IAction => {
    return {
        type: C.RESPOND_DAY_RCVD,
        payload: data
    }
}

export const getWeatherForWeekThunk = (requestTime: Date | undefined) => {
    if (requestTime && ((new Date()).toLocaleDateString() === (new Date()).toLocaleDateString())) {
        return {
            type: "DUMMY"
        }
    }
    return async (dispatch: Dispatch) => {
        dispatch(fetchWeatherWeek());
        const data = await weatherService.getWeatherForWeek();
        dispatch(receiveWeatherWeek(data));
    }
}

export const getWeatherForDayThunk = (requestTime: Date | undefined) => {
    if (requestTime && (new Date().getSeconds() - requestTime.getSeconds() < 1000)) {
        return {
            // TODO: rob of "DUMMY" actions
            type: "DUMMY"
        }
    }
    return async (dispatch: Dispatch) => {
        dispatch(fetchWeatherDay());
        // TODO: fix this temporary hack, low priority
        const data = {
            consolidated_weather: await weatherService.getWeatherForToday()
        }
        dispatch(receiveWeatherDay(data));
    }
}