describe('Expense objects', () => {
  
  var expenseItem, expense;

  beforeEach(() => {
    expenseItem = new ExpenseItem(100);
    expense = new Expense(expenseItem);
  });

  it('should be of type ExpenseItem', () => {
    expect(expense.expenseItem).toBe(expenseItem);
  });

  it('should have the correct expense amount', () => {
    expect(expense.expenseItem.amount).toBe(100);
  });
});
