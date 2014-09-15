/**
 * Created by surya on 15/9/14.
 */
// The PageObjects are ideally in separate files
// to allow for reuse across all the tests,
// but are listed here together for ease of understanding
var EditPage = (function() {
  function EditPage() {
    this.open = function() {
      browser.get('http://localhost:8000/step16/app/#/');
    };
    this.enterAuthor = function(authorParam) {
      var author = element(by.model('ctrl.todo.author'));
      author.clear();
      author.sendKeys(authorParam);
    };
    this.enterTitle = function (titleParam) {
      var title = element(by.model('ctrl.todo.title'));
      title.clear();
      title.sendKeys(titleParam);
    };
    this.clickSave = function () {
      return element(by.css('#btn-save')).click();
    };
  }

  return EditPage;
})();

module.exports = EditPage;
