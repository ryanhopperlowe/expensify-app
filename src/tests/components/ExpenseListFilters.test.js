import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import filters, { altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    wrapper;

beforeEach(() =>{
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters}
    />
  )
});

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt filters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const newText = 'rent';

  wrapper.find('input').simulate('change', {
    target: {
      value: newText
    }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(newText);
});

test('should handle sort by Amount', () => {
  const value = 'amount';

  wrapper.find('select').simulate('change', {
    target: {
      value
    }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle sort by Date', () => {
  const value = 'date';

  wrapper.setProps({
    filters: altFilters
  });

  wrapper.find('select').simulate('change', {
    target: {
      value
    }
  });

  expect(sortByDate).toHaveBeenCalled();
});

test('should handle start/end date change', () => {
  const startDate = moment(0).subtract(15, 'days');
  const endDate = moment(0).add(45, 'days');

  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate';

  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});