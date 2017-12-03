describe('Expense objects', () => {
  it('should be of type ExpenseItem', () => {
    var expenseItem = new ExpenseItem();
    var expense = new Expense(expenseItem);
    expect(expense.expenseItem).toBe(expenseItem);
  });
});
