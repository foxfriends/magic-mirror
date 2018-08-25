export function * map(transform) {
  let i = 0;
  for (const element of this) {
    yield transform(element, i++, this);
  }
}
