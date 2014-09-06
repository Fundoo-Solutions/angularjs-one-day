/**
 * Created by surya on 21/8/14.
 */
describe('Controller: LandingCtrl', function () {
  beforeEach(module('todoApp'));

  var ctrl, $httpBackend;
  var sampleTodos = [
    {
      "id": 1,
      "author": "Surya",
      "description": "Meeting with Mr. Ambani for new 4G technology",
      "title": "Meeting for 4G",
      "created_on": "1407933116673",
      "due_on": "15/08/2014",
      "completed": false
    },
    {
      "id": 2,
      "author": "Shyam",
      "description": "Meeting with Mr. Modi for new IT Infrastructure in INDIA",
      "title": "Meeting for IT Infrastructure",
      "created_on": "1407933116673",
      "due_on": "16/08/2014",
      "completed": true
    }
  ];

  beforeEach(inject(function (_$controller_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/todo')
      .respond(sampleTodos);

    ctrl = _$controller_('LandingCtrl');
  }));

  it('should get Todo class based on completed', function() {
    expect(ctrl.getTodoClass(sampleTodos[0])).toEqual({completed: false});
    expect(ctrl.getTodoClass(sampleTodos[1])).toEqual({completed: true});
    $httpBackend.flush();
  });

  it('should have items available on load', function() {
    expect(ctrl.todos).toEqual([]);

    $httpBackend.flush();

    expect(ctrl.todos).toEqual(sampleTodos);
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
