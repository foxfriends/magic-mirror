import PropTypes from 'prop-types';

export const Weather = PropTypes.shape({
  location: PropTypes.string.isRequired,
  degrees: PropTypes.oneOf(['C', 'F']),
});
