import * as React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../prop-types';
import { classNames } from '../../helpers';
import { propTypes } from '../../annotations';
import S from './index.css';

const classForDirection = direction => [S.previous, S.current, S.next][direction + 1];

const Pager = ({ children, current }) => (
  <div className={S.pager}>
    {children.map((child, index) =>
      <div className={classNames(S.page, classForDirection(Math.sign(index - current)))} key={index}>
        { child }
      </div>
    )}
    {children.length > 1
      ? (
        <div className={S.dotsContainer}>
          {children.map((_, index) => <div className={classNames(S.dot, classForDirection(Math.sign(index - current)))} key={index} />)}
        </div>
      )
      : null
    }
  </div>
);

export default Pager
  ::propTypes({
    current: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  });
