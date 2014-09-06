var passport = require('passport'),
    _ = require('underscore'),
    LocalStrategy = require('passport-local').Strategy;


exports.routes = function(app, todos_json) {

  var users = {};
  var todosMap = todos_json;
  var id = 3;

  var individualRoutes = {
    allToDos: function (req, res) {
      res.send(_(todosMap).values());
    },
    getToDo: function (req, res) {
      res.send(todosMap[req.params.id]);
    },
    addTodo: function (req, res) {
      var todo = req.body;
      todo.id = id;
      todo.createdOn = new Date().getTime();
      todosMap[id] = todo;
      id++;
      res.send(todo);
    },
    updateTodo: function(req,res) {
      var todo = req.body;
      todosMap[todo.id] = todo;
      res.send(todo);
    },
    deleteTodo: function(req, res) {
      var id = req.params.id;
      delete todosMap[id];
      res.send(_(todosMap).values());
    }
  };

  app.get('/api/todo', individualRoutes.allToDos);
  app.get('/api/todo/:id', individualRoutes.getToDo);

  app.post('/api/todo', individualRoutes.addTodo);
  app.post('/api/todo/:id', individualRoutes.updateTodo);
  app.del('/api/todo/:id', individualRoutes.deleteTodo);
};
