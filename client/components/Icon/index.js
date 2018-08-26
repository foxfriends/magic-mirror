import * as React from 'react';
import PropTypes from 'prop-types';
import { styleVars } from '../../helpers';
import { propTypes, defaultProps } from '../../annotations';
import S from './index.css';

const Icon = ({ img, size }) => <div className={S.icon} style={styleVars({ size: `${size}px` })}><img src={img} height={size} /></div>

export default Icon
  ::propTypes({
    img: PropTypes.string.isRequired,
    size: PropTypes.number,
  })
  ::defaultProps({
    size: 24,
  });
