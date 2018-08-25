export const styleVars = vars => Object.entries(vars)
  .reduce((acc, [name, value]) => Object.assign(acc, { [`--${name}`]: `${value}` }), {});
