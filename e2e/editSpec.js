/**
 * Created by surya on 15/9/14.
 */


var TodoListPage = require('./todoListPage');
var EditPage = require('./editPage');

describe('Todo List Page', function() {
  it('should show todos on the first page', function() {
    var todoListPage = new TodoListPage();
    todoListPage.open();
    todoListPage.clickEdit(0);

    browser.debugger();
    var editPage = new EditPage();
    editPage.enterAuthor('Surya');
    editPage.enterTitle('Updated todo');

    editPage.clickSave();

    expect(todoListPage.getTodoListRows().count()).toEqual(2);
    expect(todoListPage.getTitleforRow(0).getText()).toEqual('Updated todo');
    expect(todoListPage.getTitleforRow(1).getText()).toEqual('Meeting for IT Infrastructure');
    expect(todoListPage.getAuthorforRow(0).getText()).toEqual('Surya');
    expect(todoListPage.getAuthorforRow(1).getText()).toEqual('Shyam');
  });
});
