import React, { useState, useEffect } from 'react';
import weatherService from '../api/weather-service';
import styled from 'styled-components';
import { StyledFlex } from '../utils/styled-flex';

interface Day {
  applicable_date: string;
  weather_state_abbr: string;
  weather_state_name: string;
  max_temp: number;
  min_temp: number;
  id: number;
}

interface Week extends Array<Day> { }

interface WeatherResponse {
  consolidated_weather: Week
}
//TODO: rename WeekBlock
const WeekBlock: React.FC = () => {
  const [weatherForWeek, setWeatherForWeek] = useState<Week>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
    weatherService.getWeatherForWeek()
      .then((data: WeatherResponse) => {
        setWeatherForWeek(data.consolidated_weather);
        setLoading(false);
      });
  }, []);

  const renderDays = () => {
    return weatherForWeek.map(day => {
      const {
        applicable_date,
        max_temp,
        min_temp,
        weather_state_abbr,
        weather_state_name,
        id
      } = day;

      const date: Date = new Date(applicable_date)
      const dayNumber: number = date.getDate()
      const weekday: string = date.toLocaleString('default', { weekday: 'long' });
      const month: string = date.toLocaleString('default', { month: 'short' });

      const weekdayCapitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
      const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

      return (
        <DayBand
          weatherState={weather_state_name}
          key={id}
        >
          <DayCard>
            <DateBlock>
              <DayNameBlock>
                {weekdayCapitalized}
              </DayNameBlock>
              {`${dayNumber} ${monthCapitalized}`}
            </DateBlock>

            <WeatherBlock>
              <TemperatureBlock>
                {Math.round(max_temp)} / {Math.round(min_temp)}
              </TemperatureBlock>
              <Image
                src={weatherService.getImgUrl(weather_state_abbr)}
              />
            </WeatherBlock>
          </DayCard>
        </DayBand>
      )
    })
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <WeekWrapper>
      {renderDays()}
    </WeekWrapper>
  );
}

export default WeekBlock;
//TODO: do smth with AppBlock styles it not DRY
//TODO: styles

const getBackground = (stateOfWeather: string): string => {
  if ((/Cloud/).test(stateOfWeather) || (/Rain/).test(stateOfWeather)) {
    return `#EAEAEA`;
  } else if ((/Clear/).test(stateOfWeather) || (/Light/).test(stateOfWeather)) {
    return `#FFF7E0`;
  } else {
    return ``;
  }
}

interface DayCardProps {
  weatherState: string;
}

const WeekWrapper = styled(StyledFlex)`
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

const DayBand = styled(StyledFlex) <DayCardProps>`
    background: ${props => getBackground(props.weatherState)};
    width: 100%;
    justify-content: center;
    padding: 0.5em 0em;
`;

const DayCard = styled(StyledFlex)`
    width: 100%;
    height: 100%;
    position: relative;
    width: 25em;
    justify-content: space-between;
`;

const Image = styled.img`
`;

const DateBlock = styled(StyledFlex)`
    flex-direction: column;
    justify-content: center;
`;

const DayNameBlock = styled(StyledFlex)`

`;

const WeatherBlock = styled(StyledFlex)`

`;

const TemperatureBlock = styled(StyledFlex)`
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

const Button = styled.button`

`;