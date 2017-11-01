routing.$inject = ['$routeProvider', '$locationProvider'];

export function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'dist/html/about.html',
        controller: 'AboutController'
    })
    .when('/work', {
        templateUrl: 'dist/html/work.html',
        controller: 'WorkController'
    })
    .otherwise({ redirectTo: '/' });
}