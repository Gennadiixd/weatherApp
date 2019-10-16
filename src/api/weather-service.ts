class WeatherService {
  _apiBase = `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/`;
  _woeid = `2122265`;

  getResource = async (url: String): Promise<any> => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`${res.status}`)
    };

    return await res.json();
  }

  getWeatherForWeek = (): any => {
    return this.getResource(this._woeid);
  }

  getWeatherForToday = (): any => {
    const today = new Date().toISOString().substring(0, 10).replace(/-/g, "/");
    return this.getResource(`${this._woeid}/${today}`);
  }
}

export default new WeatherService();