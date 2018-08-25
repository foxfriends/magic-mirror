import * as React from 'react';
import PropTypes from 'prop-types';
import { styleVars } from '../../helpers';
import { propTypes } from '../../annotations';
import { Frame as FrameT } from '../../prop-types';

import Frame from './Frame';
import S from './index.css';

const LayoutOrganizer = ({ width, height, frames, ChildComponent }) => (
  <div className={S.grid} style={styleVars({ width, height })}>
    {frames.map(({ contents, ...frame }, i) =>
      <Frame {...frame} key={i}>
        <ChildComponent {...contents} />
      </Frame>
    )}
  </div>
);

export default LayoutOrganizer
  ::propTypes({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    frames: PropTypes.arrayOf(FrameT).isRequired,
    ChildComponent: PropTypes.func.isRequired,
  });
