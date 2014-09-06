angular.module('todoApp').controller('UpdateCtrl',
  ['TodoService', '$location', '$routeParams',
    function(TodoService, $location, $routeParams) {
      var self = this;
      var id = $routeParams.id;
      TodoService.get(id).then(function(response) {
        self.todo = response.data;
      });

      self.addTodo = function() {
        TodoService.update(self.todo).then(function(response) {
          self.todo = response.data;
          $location.path('/');
        });
      };
    }]);
