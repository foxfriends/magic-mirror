import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps } from '../../annotations';

import Greeting from './Greeting';
import Clock from './Clock';

const componentForWidget = widget => {
  switch (widget.toLowerCase()) {
    case 'greeting': return Greeting;
    case 'clock': return Clock;
    default: return React.Fragment;
  }
};

const Widget = ({ widget, config }) => {
  const Component = componentForWidget(widget);
  return <Component {...config} />;
};

export default Widget
  ::propTypes({
    widget: PropTypes.string.isRequired,
    config: PropTypes.object,
  })
  ::defaultProps({
    config: {},
  });
