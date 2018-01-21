// @flow

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('should render without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
