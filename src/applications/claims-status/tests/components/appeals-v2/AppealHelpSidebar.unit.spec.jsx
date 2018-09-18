import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AppealHelpSidebar from '../../../components/appeals-v2/AppealHelpSidebar';

describe('<AppealHelpSidebar>', () => {
  test('should render', () => {
    const props = { location: 'bva', aoj: 'other' };
    const wrapper = shallow(<AppealHelpSidebar {...props}/>);

    expect(wrapper.type()).to.equal('div');
  });

  const boardVersionText = 'Call the Board of Veterans’ Appeals';
  test('should render the board version if location is bva', () => {
    const props = { location: 'bva', aoj: 'other' };
    const wrapper = shallow(<AppealHelpSidebar {...props}/>);

    expect(wrapper.find('p').first().text()).to.equal(boardVersionText);
  });

  test(
    'should render the board version if location is "aoj" and aoj is "other"',
    () => {
      const props = { location: 'aoj', aoj: 'other' };
      const wrapper = shallow(<AppealHelpSidebar {...props}/>);

      expect(wrapper.find('p').first().text()).to.equal(boardVersionText);
    }
  );

  test('should render the vba version', () => {
    const props = { location: 'aoj', aoj: 'vba' };
    const wrapper = shallow(<AppealHelpSidebar {...props}/>);

    expect(wrapper.find('p').first().text()).to.equal('Call the Veterans Affairs Benefits and Services');
  });

  test.skip('should render the vha version', () => {
    const props = { location: 'aoj', aoj: 'vha' };
    const wrapper = shallow(<AppealHelpSidebar {...props}/>);

    expect(wrapper.find('p').first().text()).to.equal();
  });

  test.skip('should render the nca version', () => {
    const props = { location: 'aoj', aoj: 'nca' };
    const wrapper = shallow(<AppealHelpSidebar {...props}/>);

    expect(wrapper.find('p').first().text()).to.equal();
  });
});

