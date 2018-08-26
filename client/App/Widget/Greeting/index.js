import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps, connect } from '../../../annotations';
import { bindable } from '../../../helpers';
import { startOfHour, setHours } from 'date-fns/esm/fp';

import S from './index.css';

const hour = hour => new Date()::bindable(startOfHour)::bindable(setHours(hour))

const greetingText = (time, name) => {
  if (name) {
    if (time < hour(2)) {
      return `Good night, ${name}.`;
    } else if (time < hour(4)) {
      return `${name}! It's past your bedtime.`;
    } else if (time < hour(7)) {
      return `You're up early today, ${name}.`;
    } else if (time < hour(10)) {
      return `Have a good day today, ${name}!`;
    } else if (time < hour(12)) {
      return `How are you doing, ${name}?`;
    } else if (time < hour(16)) {
      return `Good afternoon, ${name}.`;
    } else if (time < hour(20)) {
      return `Good evening, ${name}.`;
    } else if (time < hour(22)) {
      return `Time for bed, ${name}?`;
    } else if (time < hour(24)) {
      return `Good night, ${name}.`;
    }
  } else {
    if (time < hour(2)) {
      return `Good night.`;
    } else if (time < hour(4)) {
      return `It's past your bedtime.`;
    } else if (time < hour(7)) {
      return `You're up early today.`;
    } else if (time < hour(10)) {
      return `Have a good day today!`;
    } else if (time < hour(12)) {
      return `How are you doing?`;
    } else if (time < hour(16)) {
      return `Good afternoon.`;
    } else if (time < hour(20)) {
      return `Good evening.`;
    } else if (time < hour(22)) {
      return `Time for bed?`;
    } else if (time < hour(24)) {
      return `Good night.`;
    }
  }
}

const Greeting = ({ time, name }) => <h1 className={S.greeting}>{ greetingText(time, name) }</h1>;

export default Greeting
  ::propTypes({
    time: PropTypes.instanceOf(Date).isRequired,
    name: PropTypes.string,
  })
  ::defaultProps({
    name: '',
  })
  ::connect(({
    widget: { global: { time } },
  }) => ({ time }));
