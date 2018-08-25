import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps, connect } from '../../../annotations';
import { bindable } from '../../../helpers';
import AnalogClock from './Analog';
import DigitalClock from './Digital';
import S from './index.css';

const Clock = ({ time, hourFormat, style, showSeconds }) => (
  <div className={S.clock}>
    {style === 'analog'
      ? <AnalogClock time={time} showSeconds={showSeconds} />
      : <DigitalClock time={time} hourFormat={hourFormat} showSeconds={showSeconds} />
    }
  </div>
)

export default Clock
  ::propTypes({
    time: PropTypes.instanceOf(Date).isRequired,
    style: PropTypes.oneOf(['analog', 'digital']),
    hourFormat: PropTypes.oneOf([12, 24]),
    showSeconds: PropTypes.bool,
  })
  ::defaultProps({
    style: 'digital',
    hourFormat: 12,
    showSeconds: false,
  })
  ::connect(({
    widget: { global: { time } },
  }) => ({ time }));
