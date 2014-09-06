
angular.module('todoApp').controller('CreateCtrl', ['TodoService', '$location',
  function(TodoService, $location) {
    var self = this;
    self.todo = {};
    self.todo.completed = false;

    self.addTodo = function() {
      TodoService.add(self.todo).then(function(response) {
        $location.path('/');
      });
    };
  }]);
