angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'mainComponent'
    })
    .state('about', {
      url: '/about',
      component: 'aboutComponent'
    })
    .state('register', {
      url: '/register',
      component: 'registerComponent'
    })
    .state('login', {
      url: '/login',
      component: 'loginComponent'
    })
    .state('profile', {
      url: '/profile',
      component: 'profileComponent'
    })
    .state('logout', {
      url: '/logout',
      component: 'logoutComponent'
    })
    .state('contact', {
      url: '/contact',
      component: 'contactComponent'
    });
}
