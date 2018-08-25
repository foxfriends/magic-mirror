import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, connect, dispatchers } from '../annotations';
import { Page } from '../prop-types';
import { classNames } from '../helpers';

import Pager from './Pager';
import LayoutOrganizer from './LayoutOrganizer';
import Widget from './Widget';
import * as ducks from './ducks';
import S from './index.css';

const App = ({ asleep, currentPage, pages, changePage }) => (
  <>
    <Pager
      current={currentPage}
      onChangePage={changePage}
      >
      {pages.map(({ width, height, frames }, i) => (
        <LayoutOrganizer width={width} height={height} frames={frames} ChildComponent={Widget} key={i} />
      ))}
    </Pager>
    <div className={classNames(S.sleepOverlay, asleep ? S.asleep : null)} />
  </>
);

export default App
  ::propTypes({
    aleep: PropTypes.bool.isRequired,
    pages: PropTypes.arrayOf(Page).isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
  })
  ::dispatchers(ducks)
  ::connect(({ app: { asleep, currentPage, pages }}) => ({ asleep, currentPage, pages }));
