import * as React from 'react';
import PropTypes from 'prop-types';
import { styleVars } from '../../../helpers';
import { propTypes } from '../../../annotations';
import S from './index.css';

const Frame = ({ top, left, width, height, children }) => (
  <div className={S.frame} style={styleVars({ top, left, width, height })}>
    { children }
  </div>
);

export default Frame
  ::propTypes({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  });
