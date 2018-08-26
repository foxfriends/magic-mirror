import * as React from 'react';
import PropTypes from 'prop-types';

import { propTypes, defaultProps, connect } from '../../annotations';
import Icon from '../../components/Icon';
import MIC from '../../assets/icons/mic.svg';
import S from './index.css';

function capitalizeFirst() {
  const [first, ...rest] = this;
  return [first.toUpperCase(), ...rest].join('');
}

const VoiceOutput = ({ text }) => text
  ? <div className={S.text}><Icon img={MIC}/> {text::capitalizeFirst()}</div>
  : null;

export default VoiceOutput
  ::propTypes({ text: PropTypes.string })
  ::defaultProps({ text: '' })
  ::connect(({ voice: { text } }) => ({ text }));
