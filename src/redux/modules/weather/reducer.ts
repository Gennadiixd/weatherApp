import * as I from './interfaces';
import * as C from './consts';

const initState = {
    loading: false,
    data: [{
        applicable_date: '',
        weather_state_abbr: '',
        weather_state_name: '',
        max_temp: NaN,
        min_temp: NaN,
        id: NaN,
    }]
}

const weather = (state: I.IStore = initState, action: I.IAction): I.IStore => {
    switch (action.type) {
        case C.FETCH_SENDED:
            return {
                loading: true,
                data: [{
                    applicable_date: '',
                    weather_state_abbr: '',
                    weather_state_name: '',
                    max_temp: NaN,
                    min_temp: NaN,
                    id: NaN,
                }]
            };
        case C.RESPOND_RCVD:
            return {
                loading: false,
                data: action.payload
                    ? action.payload.consolidated_weather
                    : new Error()
            };
        default:
            return state;
    }
}

export default weather;