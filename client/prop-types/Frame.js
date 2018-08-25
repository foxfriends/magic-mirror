import * as React from 'react';
import PropTypes from 'prop-types';
import { Widget } from './Widget';

export const Frame = PropTypes.shape({
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  contents: PropTypes.any,
});
