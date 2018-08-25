const fs = require('fs');
const toml = require('toml');
require.extensions['.toml'] = (module, filename) => {
  try {
    module.exports = toml.parse(fs.readFileSync(filename, 'utf8'))
  } catch (_) {}
};
