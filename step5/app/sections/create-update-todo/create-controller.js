
angular.module('todoApp').controller('CreateCtrl', ['$window',
  function($window) {
    var self = this;
    self.todo = {};
    self.todo.completed = false;
    self.message = '';
    self.addTodo = function() {
      self.message = 'Clicked add with ' + self.todo.title;
      $window.alert(self.message);
    };
  }]);
