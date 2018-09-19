import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import SpouseMarriageTitle from '../../components/SpouseMarriageTitle';

describe('Pensions SpouseMarriageTitle', () => {
  test('should render first marriage title', () => {
    const tree = SkinDeep.shallowRender(
      <SpouseMarriageTitle
        id="id"
        formContext={{ pagePerItemIndex: 0 }}/>
    );

    expect(tree.text()).to.contain('Spouse’s first marriage');
  });
  test('should render marriage title with number value', () => {
    const tree = SkinDeep.shallowRender(
      <SpouseMarriageTitle
        id="id"
        formContext={{ pagePerItemIndex: 10 }}/>
    );

    expect(tree.text()).to.contain('Spouse marriage 11');
  });
});
