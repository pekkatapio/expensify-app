import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
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
    const expense = {
        id: '100',
        description: 'Lawn mower',
        note: '',
        amount: 23400,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const id = expenses[2].id;
    const updates = {
        amount: 23400,
    }; 
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(updates.amount);
});

test('should not edit expense if expense not found', () => {
    const id = '-1';
    const updates = {
        description: 'Lawn mower',
        note: '',
        amount: 23400,
        createdAt: 20000
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});