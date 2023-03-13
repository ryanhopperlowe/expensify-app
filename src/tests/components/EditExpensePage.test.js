import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[2]} 
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      history={history} 
    />
  );
});

test('should render the edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const newExpense = {
    ...expenses[2],
    description: 'new expense description'
  };  

  wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, newExpense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
