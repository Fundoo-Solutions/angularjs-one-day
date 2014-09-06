angular.module('todoApp').factory('TodoService', ['$http',
    function($http) {

  return {
    query: function() {
      return $http.get('/api/todo');
    },
    add: function(todo) {
      return $http.post('/api/todo', todo);
    },
    "get": function(id) {
      return $http.get('/api/todo/' + id);
    },
    update: function(todo) {
      return $http.post('/api/todo/' + todo.id, todo);
    },
    del: function(id) {
      return $http['delete']('/api/todo/' + id);
    }
  };
}]);
