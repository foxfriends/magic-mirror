import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from '../../../../annotations';

import S from './index.css';

const DigitalClock = ({ time, hourFormat, showSeconds }) => <></>;

export default DigitalClock
  ::propTypes({
    time: PropTypes.instanceOf(Date).isRequired,
    hourFormat: PropTypes.oneOf([12, 24]),
    showSeconds: PropTypes.bool,
  });
