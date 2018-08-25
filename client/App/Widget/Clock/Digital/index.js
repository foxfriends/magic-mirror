import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from '../../../../annotations';
import { format } from 'date-fns';

import S from './index.css';

const formatFor = (hourFormat, showSeconds) => {
  const hours = hourFormat === 24 ? 'H' : 'h';
  const seconds = showSeconds ? '.ss' : '';
  return `${hours}:mm${seconds}`
}

const DigitalClock = ({ time, hourFormat, showSeconds }) => (
  <span className={S.time}>
    { format(time, hourFormat === 24 ? 'H' : 'h') }:{ format(time, 'mm') }
    {showSeconds
      ? <span className={S.seconds}>{ format(time, '.s') }</span>
      : null
    }
  </span>
);

export default DigitalClock
  ::propTypes({
    time: PropTypes.instanceOf(Date).isRequired,
    hourFormat: PropTypes.oneOf([12, 24]),
    showSeconds: PropTypes.bool,
  });
