angular.module('todoApp', ['ngRoute']).config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'sections/landing/landing.html',
      controller: 'LandingCtrl',
      controllerAs: 'lCtrl'
    })
    .when('/add', {
      templateUrl: 'sections/create-update-todo/create-update.html',
      controller: 'CreateCtrl',
      controllerAs: 'ctrl'
    })
    .when('/edit/:id', {
      templateUrl: 'sections/create-update-todo/create-update.html',
      controller: 'UpdateCtrl',
      controllerAs: 'ctrl'
    }).otherwise({
      redirectTo: '/'
    });
});
