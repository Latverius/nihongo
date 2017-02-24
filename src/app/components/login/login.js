class LoginController {
  constructor($http, $location, $rootScope) {
    let that = this;
    that.http = $http;
    that.location = $location;
    that.rootScope = $rootScope;
    that.errors = {};
  }

  loginUser(that) {
    that.errors = {};
    console.log(that.user);
    that.http.post('http://localhost:8081/login', that.user)
    .then(function(results) {
      if(results.statusText == "OK") {
        console.log("Connexion réussie !!!");
        console.log(results);
        that.rootScope.user = results.config.data;
        that.location.path('/');
      }
    });
  }
}

angular
  .module('app')
  .component('loginComponent', {
    templateUrl: 'app/components/login/login.html',
    controller: LoginController,
    controllerAs: '$lc'
  });
