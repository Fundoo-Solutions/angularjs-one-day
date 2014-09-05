angular.module('todoApp').factory('TodoService', [function() {
  var todos = [{
    author: 'Shyam Seshadri',
    title: 'First Todo',
    completed: false,
    dueOn: '2014-09-19'
  }, {
    author: 'Shyam',
    title: 'Second Todo',
    completed: true,
    dueOn: '2014-09-19'
  }];
  return {
    query: function() {
      return todos;
    },
    add: function(todo) {
      todos.push(todo);
    }
  };
}]);
