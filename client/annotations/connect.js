import { connect as connect_ } from 'react-redux';

export function connect(...args) {
  return connect_(...args)(this);
}
