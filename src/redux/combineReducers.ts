import { combineReducers } from 'redux';
import weather from './modules/weather/reducer';

export default combineReducers({
    weather,
});