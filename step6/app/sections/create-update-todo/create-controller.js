
angular.module('todoApp').controller('CreateCtrl', ['TodoService',
  function(TodoService) {
    var self = this;
    self.todo = {};
    self.todo.completed = false;

    self.addTodo = function() {
      TodoService.add(self.todo);
      self.todo = {completed: false};
    };
  }]);
