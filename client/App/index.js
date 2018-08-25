import * as React from 'react';
import PropTypes from 'prop-types';
import { propTypes, connect, dispatchers } from '../annotations';
import { Page } from '../prop-types';

import Pager from './Pager';
import LayoutOrganizer from './LayoutOrganizer';
import Widget from './Widget';
import * as ducks from './ducks';

const App = ({ currentPage, pages, changePage }) => (
  <Pager
    current={currentPage}
    onChangePage={changePage}
    >
    {pages.map(({ width, height, frames }, i) => (
      <LayoutOrganizer width={width} height={height} frames={frames} ChildComponent={Widget} key={i} />
    ))}
  </Pager>
);

export default App
  ::propTypes({
    pages: PropTypes.arrayOf(Page).isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
  })
  ::dispatchers(ducks)
  ::connect(({ app: { currentPage, pages }}) => ({ currentPage, pages }));
