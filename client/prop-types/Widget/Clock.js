import PropTypes from 'prop-types';

export const Clock = PropTypes.shape({
  style: PropTypes.oneOf(['analog', 'digital']),
  hourFormat: PropTypes.oneOf([12, 24]),
  showSeconds: PropTypes.bool,
});
