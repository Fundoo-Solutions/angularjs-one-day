angular.module('todoApp').controller('LandingCtrl', ['TodoService', '$scope',
    function(TodoService, $scope) {
  var self = this;

  self.todos = [];

  var fetchTodos = function() {
    TodoService.query().then(function(response) {
      self.todos = response.data;
    }, function(error) {
      console.error('Error fetching list of todos', error.data);
    });
  };

  fetchTodos();

  $scope.$on('todo.added', function(event) {
    fetchTodos();
  });

  self.getTodoClass = function(todo) {
    return {
      completed: todo.completed
    };
  };
}]);
