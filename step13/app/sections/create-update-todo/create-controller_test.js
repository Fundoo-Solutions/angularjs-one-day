describe('Controller: CreateController', function() {
  beforeEach(module('todoApp'));

  var ctrl, $httpBackend, $location;

  beforeEach(inject(function($controller, _$httpBackend_, _$location_) {
    $httpBackend = _$httpBackend_;
    ctrl = $controller('CreateCtrl');
    $location = _$location_;
  }));

  it('should be not completed by default', function() {
    expect(ctrl.todo.completed).toEqual(false);
  });

  it('should save todo', function() {
    // Initially somewhere else
    $location.path('/examples');
    $httpBackend.expectPOST('/api/todo',
        {completed: false, label: 'Mock', author: 'Shyam'})
        .respond({something: 'ignored'});
    ctrl.todo = {completed: false, label: 'Mock', author: 'Shyam'};
    ctrl.addTodo();
    $httpBackend.flush();

    // At the end, redirected to /
    expect($location.path()).toEqual('/');
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

});
