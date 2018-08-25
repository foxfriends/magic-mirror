import * as React from 'react';
import PropTypes from 'prop-types';
import { getHours, getMinutes, getSeconds } from 'date-fns';
import { propTypes } from '../../../../annotations';
import { styleVars } from '../../../../helpers';
import { range, map, collect } from '../../../../helpers/iter';

import S from './index.css';

const deg = x => `${x}deg`;

const hoursAngle = time => {
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  return deg(
    360 / 12 * hours +
    360 / 12 / 60 * minutes +
    360 / 12 / 60 / 60 * seconds
  );
}

const minutesAngle = time => {
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  return deg(
    360 / 60 * minutes +
    360 / 60 / 60 * seconds
  );
}

const secondsAngle = time => {
  const seconds = getSeconds(time);
  return deg(360 / 60 * seconds);
}

const AnalogClock = ({ time, showSeconds }) => (
  <div className={S.container}>
    <div className={S.ring}>
      <div className={S.hourHand} style={styleVars({ angle: hoursAngle(time) })} />
      <div className={S.minuteHand} style={styleVars({ angle: minutesAngle(time) })} />
      { showSeconds ? <div className={S.secondHand} style={styleVars({ angle: secondsAngle(time) })} /> : null }
      { range(0, 12)::map(hour => <div className={S.hourMark} style={styleVars({ angle: deg(360 / 12 * hour) })} key={hour} />)::collect() }
    </div>
  </div>
);

export default AnalogClock
  ::propTypes({
    time: PropTypes.instanceOf(Date).isRequired,
    showSeconds: PropTypes.bool,
  });
