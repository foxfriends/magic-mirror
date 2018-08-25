import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps, connect } from '../../../annotations';
import { bindable } from '../../../helpers';
import { setHours } from 'date-fns/esm/fp';

import S from './index.css';

const greetingText = (time, name) => {
  if (name) {
    if (time < new Date()::bindable(setHours(2))) {
      return `Good night, ${name}.`;
    } else if (time < new Date()::bindable(setHours(4))) {
      return `${name}! It's past your bedtime.`;
    } else if (time < new Date()::bindable(setHours(7))) {
      return `Good morning, ${name}! You're up early today.`;
    } else if (time < new Date()::bindable(setHours(10))) {
      return `Have a good day today, ${name}!`;
    } else if (time < new Date()::bindable(setHours(12))) {
      return `Hi ${name}, how are you doing?`;
    } else if (time < new Date()::bindable(setHours(16))) {
      return `Good afternoon, ${name}.`;
    } else if (time < new Date()::bindable(setHours(20))) {
      return `Good evening, ${name}.`;
    } else if (time < new Date()::bindable(setHours(22))) {
      return `Good evening, ${name}. Time for bed?`;
    } else if (time < new Date()::bindable(setHours(24))) {
      return `Good night, ${name}.`;
    }
  } else {
    if (time < new Date()::bindable(setHours(2))) {
      return `Good night.`;
    } else if (time < new Date()::bindable(setHours(4))) {
      return `It's past your bedtime.`;
    } else if (time < new Date()::bindable(setHours(7))) {
      return `Good morning! You're up early today.`;
    } else if (time < new Date()::bindable(setHours(10))) {
      return `Have a good day today!`;
    } else if (time < new Date()::bindable(setHours(12))) {
      return `How are you doing?`;
    } else if (time < new Date()::bindable(setHours(16))) {
      return `Good afternoon.`;
    } else if (time < new Date()::bindable(setHours(20))) {
      return `Good evening.`;
    } else if (time < new Date()::bindable(setHours(22))) {
      return `Time for bed?`;
    } else if (time < new Date()::bindable(setHours(24))) {
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
