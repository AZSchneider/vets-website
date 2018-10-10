import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import {
  DefinitionTester,
  fillDate,
  fillData,
} from '../../../../../platform/testing/unit/schemaform-utils';
import formConfig from '../../config/form';

describe('781 Unit Assignment Details', () => {
  const page =
    formConfig.chapters.disabilityDetails.pages.ptsdAssignmentDetails;
  const { schema, uiSchema, arrayPath } = page;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:selectablePtsdTypes': {
            'view:assaultPtsdType': true,
          },
        }}
        uiSchema={uiSchema}
        formData={{}}
      />,
    );
    expect(form.find('input').length).to.equal(3);
    expect(form.find('select').length).to.equal(4);
  });

  it('should fill in unit assignment details', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:selectablePtsdTypes': {
            'view:assaultPtsdType': true,
          },
        }}
        uiSchema={uiSchema}
        formData={{}}
      />,
    );

    fillData(form, 'input#root_unitAssigned', '21st Airborne');
    fillDate(form, 'root_unitAssignedDates_from', '2016-07-10');
    fillDate(form, 'root_unitAssignedDates_to', '2017-06-12');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error-message').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
  it('should allow submission if no assigned unit details are submitted', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:selectablePtsdTypes': {
            'view:combatPtsdType': true,
          },
        }}
        uiSchema={uiSchema}
        formData={{}}
      />,
    );

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error-message').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
