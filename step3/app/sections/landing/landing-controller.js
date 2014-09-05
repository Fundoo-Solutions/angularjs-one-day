angular.module('todoApp').controller('LandingCtrl', [function() {
  var self = this;
  self.todos = [{
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

  self.getTodoClass = function(todo) {
    return {
      completed: todo.completed
    };
  };
}]);
