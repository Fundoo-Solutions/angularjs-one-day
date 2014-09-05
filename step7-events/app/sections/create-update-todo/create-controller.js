
angular.module('todoApp').controller('CreateCtrl', ['TodoService', '$rootScope',
  function(TodoService, $rootScope) {
    var self = this;
    self.todo = {};
    self.todo.completed = false;

    self.addTodo = function() {
      TodoService.add(self.todo).then(function(response) {
        self.todo = {completed: false};
        $rootScope.$broadcast('todo.added');
      });
    };
  }]);
