const fs = require('fs');
const toml = require('toml');

const normalizeKey = key => key
  .replace(/_([a-z])/g, (_, l) => l.toUpperCase())
  .replace(/-([a-z])/g, (_, l) => l.toUpperCase());

const normalizeKeys = obj =>
  obj instanceof Array
    ? obj.map(normalizeKeys)
    : Object.entries(obj)
        .map(([key, value]) => [normalizeKey(key), typeof value === 'object' ? normalizeKeys(value) : value])
        .reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {});

require.extensions['.toml'] = (module, filename) => {
  try {
    module.exports = normalizeKeys(toml.parse(fs.readFileSync(filename, 'utf8')));
  } catch (_) {}
};
