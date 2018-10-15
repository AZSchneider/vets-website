const Timeouts = require('../../../../platform/testing/e2e/timeouts');
const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const FormsTestHelpers = require('../../../../platform/testing/e2e/form-helpers');
const manifest = require('../manifest.json');

module.exports = E2eHelpers.createE2eTest(client => {
  // Ensure introduction page renders.
  client
    .url(`${E2eHelpers.baseUrl}/disability-benefits/781`)
    .waitForElementVisible('body', Timeouts.slow)
    .waitForElementVisible('.schemaform-title', Timeouts.slow) // First render of React may be slow.
    .click('.schemaform-intro .usa-button-primary');

  E2eHelpers.overrideVetsGovApi(client);
  FormsTestHelpers.overrideFormsScrolling(client);
  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

  // Introduction information
  client.axeCheck('.main');
  E2eHelpers.expectLocation(client, 'info');
  client.click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/info');

  // PTSD type selection
  client.axeCheck('.main');
  E2eHelpers.expectLocation(client, 'ptsdType');
  client.click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/ptsdType');

  client.end();
});

module.exports['@disabled'] =
  !manifest.production || __BUILDTYPE__ !== 'production';
