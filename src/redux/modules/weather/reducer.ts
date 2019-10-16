import * as I from '../../../interfaces';
import * as C from './consts';

const initState = {
    week: {
        requestTime: undefined,
        loading: false,
        data: [{
            applicable_date: '',
            weather_state_abbr: '',
            weather_state_name: '',
            max_temp: undefined,
            min_temp: undefined,
            id: undefined,
        }]
    },
    day: {
        requestTime: undefined,
        loading: false,
        data: [{
            applicable_date: '',
            weather_state_abbr: '',
            weather_state_name: '',
            max_temp: undefined,
            min_temp: undefined,
            id: undefined,
        }]
    }
}

const weather = (state: I.IPeriod = initState, action: I.IAction): I.IPeriod => {
    switch (action.type) {
        case C.FETCH_WEEK_SENDED:
            return {
                ...state,
                week: {
                    requestTime: new Date(),
                    loading: true,
                    data: [{
                        applicable_date: '',
                        weather_state_abbr: '',
                        weather_state_name: '',
                        max_temp: undefined,
                        min_temp: undefined,
                        id: undefined,
                    }]
                }
            };
        case C.RESPOND_WEEK_RCVD:
            return {
                ...state,
                week: {
                    requestTime: new Date('timestamp'),
                    loading: false,
                    data: action.payload
                        ? action.payload.consolidated_weather
                        : new Error('Server response is not valid')
                }
            };
        case C.FETCH_DAY_SENDED:
            return {
                ...state,
                day: {
                    requestTime: new Date('timestamp'),
                    loading: true,
                    data: [{
                        applicable_date: '',
                        weather_state_abbr: '',
                        weather_state_name: '',
                        max_temp: undefined,
                        min_temp: undefined,
                        id: undefined,
                    }]
                }
            };
        case C.RESPOND_DAY_RCVD:
            return {
                ...state,
                day: {
                    requestTime: new Date(),
                    loading: false,
                    data: action.payload
                        ? action.payload.consolidated_weather
                        : new Error('Server response is not valid')
                }
            };
        default:
            return state;
    }
}

export default weather;