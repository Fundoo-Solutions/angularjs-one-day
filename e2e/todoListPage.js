/**
 * Created by surya on 15/9/14.
 */
// The PageObjects are ideally in separate files
// to allow for reuse across all the tests,
// but are listed here together for ease of understanding
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
