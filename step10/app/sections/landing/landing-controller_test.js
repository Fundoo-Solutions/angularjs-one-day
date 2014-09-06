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

  }));

  it('should get Todo class based on completed', function() {
  });

  it('should have items available on load', function() {

  });

  afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
  });
});
