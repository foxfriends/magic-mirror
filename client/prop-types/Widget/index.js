import PropTypes from 'prop-types';

import { Clock } from './Clock';
import { Greeting } from './Greeting';

export const Widget = PropTypes.shape({
  widget: PropTypes.oneOf([
    'clock',
    'greeting',
  ]),
  config: PropTypes.oneOfType([
    Clock,
    Greeting,
  ]),
});
