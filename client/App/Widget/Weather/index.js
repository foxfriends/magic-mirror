import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps, connect } from '../../../annotations';
import { classNames, request } from '../../../helpers';
import { startOfHour } from 'date-fns/esm/fp';

import S from './index.css';

const imageFor = skycode => {
  switch (+skycode) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 17:
    case 35:
      return 'wi-thunderstorm';
    case 6:
      return 'wi-sleet';
    case 5:
    case 7:
    case 10:
      return 'wi-rain-mix';
    case 8:
    case 9:
      return 'wi-hail';
    case 11:
      return 'wi-sprinkle';
    case 12:
      return 'wi-rain';
    case 13:
      return 'wi-snow';
    case 14:
    case 16:
    case 42:
    case 43:
      return 'wi-snow-wind';
    case 15:
      return 'wi-night-snow-thunderstorm';
    case 18:
    case 40:
      return 'wi-showers';
    case 19:
    case 21: // haze?
      return 'wi-dust';
    case 20:
      return 'wi-fog';
    case 22:
      return 'wi-smoke';
    case 23:
    case 24:
      return 'wi-windy';
    case 25:
      return 'wi-snowflake-cold';
    case 26:
      return 'wi-cloud';
    case 27:
    case 29:
    case 33:
      return 'wi-night-alt-cloudy';
    case 28:
    case 30:
    case 34:
      return 'wi-day-cloudy';
    case 31:
      return 'wi-night-clear';
    case 32:
      return 'wi-day-sunny';
    case 36:
      return 'wi-thermometer';
    case 37:
    case 38:
      return 'wi-day-thunderstorm';
    case 39:
      return 'wi-day-showers';
    case 41:
      return 'wi-day-show';
    case 45:
      return 'wi-night-alt-showers';
    case 46:
      return 'wi-night-alt-snow';
    case 47:
      return 'wi-night-alt-thunderstorm';
    case 44:
    default:
      return 'wi-na';
  }
}

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: null,
    };
  }

  componentDidMount() {
    this.retrieveWeatherInfo();
  }

  async retrieveWeatherInfo() {
    const { location, degrees } = this.props;
    const weather = await request(`/weather?location=${location}&degrees=${degrees}`);
    this.setState({ weather });
    setTimeout(::this.retrieveWeatherInfo, 1000 * 60 * 10);
  }

  render() {
    const { location, degrees, time } = this.props;
    const { weather } = this.state;

    if (!weather) {
      return <div className={S.placeholder}><span>Retrieving weather info for:</span><span>{location}</span></div>;
    } else {
      const [myWeather] = weather;
      if (!myWeather) {
        return <div className={S.placeholder}><span>Weather info not found for:</span><span>{location}</span></div>;
      } else {
        const { current, forecast } = myWeather;
        const today = forecast.find(({ date }) => date === current.date);
        return (
          <div className={S.weather}>
            <div className={S.location}>{myWeather.location.name}</div>
            <div className={S.info}>
              <div className={S.image}>
                <i className={classNames('wi', imageFor(current.skycode))} />
                <span className={S.skytext}>{current.skytext}</span>
              </div>
              <div className={S.temperatures}>
                <span>Current: {+current.temperature}&deg; {degrees}</span>
                <span>High: {+today.high}&deg; {degrees}</span>
                <span>Low: {+today.low}&deg; {degrees}</span>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default Weather
  ::propTypes({
    location: PropTypes.string.isRequired,
    degrees: PropTypes.oneOf(['C', 'F']),
  })
  ::defaultProps({
    degrees: 'C',
  });
