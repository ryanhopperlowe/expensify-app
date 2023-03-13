import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

