describe('expensesDataService', () => {
  
  beforeEach(module('app'));

  it('should return three expenses items', inject(function (expensesDataService) {
     expect(expensesDataService.getExpenses().length).toBe(3);
  }));
});