import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log('updated', expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => (props.match.params.id === expense.id))
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);