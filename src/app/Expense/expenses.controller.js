(function() {
  'use strict';

  angular
    .module('app')
    .controller('expensesController', expensesController);

  expensesController.$inject = ['$scope'];

  function expensesController($scope) {
    var vm = this;
    
    vm.activate = activate;
    vm.expenseItems = [];

    activate();

    ////////////////

    function activate() {
      return vm.expenseItems = [
        { title: 'Taxi', description: 'To airport', amount: '89.95'},
        { title: 'Lunch', description: 'At airport', amount: '15.40'},
        { title: 'Coffee', description: 'Starbucks', amount: '4.93'}
      ];
    }
  }
})();