angular.module('todoApp').directive('todoWidget', [function() {
  return {
    restrict: 'A',
    templateUrl: 'components/todo-widget/todo-widget.html',
    scope: {
      todo: '=todoData'
    },
    link: function($scope, $element, $attrs) {
      $scope.getTodoClass = function() {
        return {
          completed: $scope.todo.completed
        };
      };
    }
  };
}]);
