import PropTypes from 'prop-types';

import { Clock } from './Clock';
import { Greeting } from './Greeting';
import { Weather } from './Weather';

export const Widget = PropTypes.shape({
  widget: PropTypes.oneOf([
    'clock',
    'greeting',
    'weather',
  ]),
  config: PropTypes.oneOfType([
    Clock,
    Greeting,
    Weather,
  ]),
});
