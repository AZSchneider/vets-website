const E2eHelpers = require('../e2e/e2e-helpers');
const manifest = require('../../src/js/direct-deposit/manifest.json');
const Timeouts = require('../e2e/timeouts.js');

module.exports = E2eHelpers.createE2eTest((client) => {
  client
    .url(`${E2eHelpers.baseUrl}/direct-deposit`)
    .waitForElementVisible('body', Timeouts.normal)
    .axeCheck('.main');

  client.end();
});

module.exports['@disabled'] = !manifest.production;
