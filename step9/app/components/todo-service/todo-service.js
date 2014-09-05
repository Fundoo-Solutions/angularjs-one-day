angular.module('todoApp').factory('TodoService', ['$http',
    function($http) {

  return {
    query: function() {
      return $http.get('/api/todo');
    },
    add: function(todo) {
      return $http.post('/api/todo', todo);
    }
  };
}]);
