import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    id: '[TestId1]',
    description: 'some description',
    amount: 1500,
    createdAt: moment().add(15, 'days'),
    note: ''
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, newExpense ]);
});

test('should edit an expense', () => {
  const expenseUpdates = {
    description: 'updated description',
    amount: 500000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: expenseUpdates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({
    ...expenses[1],
    ...expenseUpdates
  });
});

test('should not edit an expense if expense id not found', () => {
  const expenseUpdates = {
    description: 'updated description',
    amount: 500000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: expenseUpdates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});