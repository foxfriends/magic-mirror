import PropTypes from 'prop-types';
import { Frame } from './Frame';

export const Page = PropTypes.shape({
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  frames: PropTypes.arrayOf(Frame).isRequired,
});
