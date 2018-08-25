import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, defaultProps, dispatchers } from '../../annotations';
import * as ducks from './ducks';

import Greeting from './Greeting';
import Clock from './Clock';

const componentForWidget = widget => {
  switch (widget.toLowerCase()) {
    case 'greeting': return Greeting;
    case 'clock': return Clock;
    default: return React.Fragment;
  }
};

class Widget extends React.PureComponent {
  componentDidMount() {
    this.props.startClock();
  }

  render() {
    const { widget, config } = this.props;
    const Component = componentForWidget(widget);
    return <Component {...config} />;
  }
};

export default Widget
  ::propTypes({
    widget: PropTypes.string.isRequired,
    config: PropTypes.object,
    startClock: PropTypes.func.isRequired,
  })
  ::dispatchers(ducks)
  ::defaultProps({
    config: {},
  });
