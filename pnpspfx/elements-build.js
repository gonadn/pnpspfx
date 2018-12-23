const concat = require('concat');

(async function build() {
  const files = [
    './dist/pnpspfx/runtime.js',
    './dist/pnpspfx/polyfills.js',
    './dist/pnpspfx/scripts.js',
    './dist/pnpspfx/main.js'
  ];
  await concat(files, './dist/pnpspfx/bundle.js');
})();
