import React from 'react';
import enzyme from 'enzyme';
import { expect } from 'chai';

import isBrandConsolidationEnabled from '../feature-flag';

function SharedComponent() {
  if (isBrandConsolidationEnabled()) return <h1>VA.gov</h1>;
  return <h1>Vets.gov</h1>;
}

describe('brand-consolidation/feature-flag', () => {
  let windowSettings = null;

  beforeAll(() => {
    windowSettings = window.settings;
  });

  afterAll(() => {
    window.settings = windowSettings;
  });

  test('renders Vets.gov when the feature-flag is false', () => {
    window.settings = { brandConsolidationEnabled: false };

    const component = enzyme.shallow(<SharedComponent/>);
    expect(component.text()).to.be.equal('Vets.gov');
  });

  test('renders VA.gov when the feature-flag is true', () => {
    window.settings = { brandConsolidationEnabled: true };

    const component = enzyme.shallow(<SharedComponent/>);
    expect(component.text()).to.be.equal('VA.gov');
  });

});
