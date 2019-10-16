import { Dispatch } from 'redux';
import * as I from './interfaces';
import * as C from './consts';
import weatherService from '../../../api/weather-service';

export const fetchSended = (): I.IAction => {
    return {
        type: C.FETCH_SENDED
    }
}

export const respondRcvd = (data: I.IWeatherResponse): I.IAction => {
    return {
        type: C.RESPOND_RCVD,
        payload: data
    }
}

export const setFuncThunk = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchSended())
        const data = await weatherService.getWeatherForWeek()
        dispatch(respondRcvd(data))
    }
}