angular.module('todoApp').controller('LandingCtrl', ['TodoService',
    function(TodoService) {
  var self = this;

  // NOTE: Only works because it is by reference
  self.todos = TodoService.query();

  self.getTodoClass = function(todo) {
    return {
      completed: todo.completed
    };
  };
}]);
