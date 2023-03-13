import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object.', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup edit expense action object.', () => {
  const action = editExpense('123abc', {
    description: 'bill',
    amount: 1500
  });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'bill',
      amount: 1500
    }
  });
});

test('Should setup add expense action object with provided values.', () => {
  const expenseData = {
    description: 'gass bill',
    amount: 1500,
    createdAt: 1000,
    note: "last month's rent!"
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values.', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});