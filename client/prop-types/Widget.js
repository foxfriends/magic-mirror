import PropTypes from 'prop-types';
import { Frame } from './Frame';

export const Widget = PropTypes.shape({
  name: PropTypes.string.isRequired,
  config: PropTypes.object,
});
