import { connect as connect_ } from 'react-redux';

export function dispatchers(ducks) {
  return connect_(
    () => ({}),
    dispatch => Object.entries(ducks)
      .map(([name, func]) => [name, (...args) => dispatch(func(...args))])
      .reduce((acc, [name, func]) => Object.assign(acc, { [name]: func }), {}),
  )(this);
}
