angular.module('todoApp').directive('todoWidget', ['TodoService', function(TodoService) {
  return {
    restrict: 'A',
    templateUrl: 'components/todo-widget/todo-widget.html',
    scope: {
      todo: '=todoData',
      whenDelete: '&'
    },
    link: function($scope, $element, $attrs) {
      $scope.getTodoClass = function() {
        return {
          completed: $scope.todo.completed
        };
      };

      $scope.deleteTodo = function() {
        TodoService.del($scope.todo.id).then(function(response) {
          $scope.whenDelete();
        });
      };
    }
  };
}]);
