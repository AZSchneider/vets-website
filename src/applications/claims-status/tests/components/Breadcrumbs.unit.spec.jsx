import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ClBreadcrumbs from '../../components/Breadcrumbs';

describe('<Breadcrumbs>', () => {
  it('should render first two items', () => {
    const tree = SkinDeep.shallowRender(
      <ClBreadcrumbs>
        <a href="#">Testing</a>
      </ClBreadcrumbs>
    );

    const items = tree.everySubTree('a');
    expect(items[0].props.href).to.equal('/');
    expect(items[1].props.href).to.equal('/disability-benefits/');
    expect(items[2].text()).to.equal('Testing');
  });
});
