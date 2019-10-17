export interface IStore {
    weather: IPeriod
    // If need to expand store - expand this interface <===
}

export interface IPeriod {
    week: IWeatherStore,
    day: IWeatherStore
}

export interface IWeek extends Array<IDay> { }

export interface IWeatherStore {
    requestTime: Date | undefined,
    loading: boolean,
    data: IWeek | Error
}

export interface IDay {
    applicable_date: string;
    weather_state_abbr: string;
    weather_state_name: string;
    max_temp: number | undefined;
    min_temp: number | undefined;
    id: number | undefined;
    the_temp: number | undefined;
    created: string | undefined;
}

export interface IAction {
    type: string;
    payload?: IWeatherResponse
}

export interface IWeatherResponse {
    consolidated_weather: IWeek
}
