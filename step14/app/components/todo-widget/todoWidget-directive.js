angular.module('todoApp').directive('todoWidget', [function() {
  return {
    restrict: 'A',
    templateUrl: 'components/todo-widget/todo-widget.html'
  };
}]);
