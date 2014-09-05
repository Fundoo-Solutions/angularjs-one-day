angular.module('todoApp').controller('LandingCtrl', [function() {
  var self = this;
  self.firstTodo = {
    author: 'Shyam Seshadri',
    title: 'First Todo',
    dueOn: '2014-09-19'
  };

  var secondTodo = {
    author: 'Shyam',
    title: 'Second Todo',
    dueOn: '2014-09-19'
  };
}]);
