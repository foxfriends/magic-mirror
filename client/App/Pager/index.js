import * as React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../prop-types';
import { classNames } from '../../helpers';
import { propTypes } from '../../annotations';
import S from './index.css';

const classForDirection = direction => [S.previous, S.current, S.next][direction + 1];

const Pager = ({ children, current, onChangePage }) => (
  <div className={S.pager}>
    {children.map((child, index) =>
      <div className={classNames(S.page, classForDirection(Math.sign(index - current)))} key={index}>
        { child }
      </div>
    )}
    {/* TODO: pager dots */}
  </div>
);

export default Pager
  ::propTypes({
    current: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  });
