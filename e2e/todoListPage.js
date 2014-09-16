var TodoListPage = (function() {
  function TodoListPage() {
    this.open = function() {
      browser.get('http://localhost:8000/step16/app/#/');
    };
    this.getTodoListRows = function() {
      return element.all(by.repeater('eachTodo in lCtrl.todos'));
    };
    this.getTitleforRow = function (row) {
      return element(by.repeater('eachTodo in lCtrl.todos')
          .row(row).column('todo.title'));
    };
    this.getAuthorforRow = function (row) {
      return element(by.repeater('eachTodo in lCtrl.todos')
          .row(row).column('todo.author'));
    };
    this.clickEdit = function (row) {
      return element(by.css('#btn-edit')).click();
    };
  }

  return TodoListPage;
})();

module.exports = TodoListPage;
