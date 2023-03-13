import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render expense list item with fixture data', () => {
  const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
  expect(wrapper).toMatchSnapshot();
});
