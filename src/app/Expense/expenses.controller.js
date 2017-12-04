(function() {
  'use strict';

  angular
    .module('app')
    .controller('expensesController', expensesController);

  expensesController.$inject = ['expensesDataService'];

  function expensesController(expensesDataService) {
    var vm = this;
    
    vm.activate = activate;
    vm.expenseItems = [];

    activate();

    ////////////////

    function activate() {
      vm.expenseItems = expensesDataService.getExpenses();
    }
  }
})();