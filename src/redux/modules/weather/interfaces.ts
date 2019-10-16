export interface IStore {
    loading: boolean,
    data: IWeek | Error
}

export interface IDay {
    applicable_date: string;
    weather_state_abbr: string;
    weather_state_name: string;
    max_temp: number;
    min_temp: number;
    id: number;
}

export interface IWeek extends Array<IDay> { }

export interface IAction {
    type: string;
    payload?: IWeatherResponse
}


export interface IWeatherResponse {
    consolidated_weather: IWeek
}