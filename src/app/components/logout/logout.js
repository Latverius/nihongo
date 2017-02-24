class LogoutController {
  constructor($http, $location) {
    let that = this;
    that.http = $http;
    that.location = $location;
    that.errors = {};
    that.logoutUser(that);
  }

  logoutUser(that) {
    that.http.post('http://localhost:8081/logout')
    .then(function(results) {
      if(results.statusText == "OK") {
        console.log("Déconnexion réussie !!!");
        console.log(results);
        sessionStorage.removeItem('user');
        window.location.href = 'http://localhost:3000';
      }
    });
  }
}

angular
  .module('app')
  .component('logoutComponent', {
    templateUrl: 'app/components/logout/logout.html',
    controller: LogoutController,
    controllerAs: '$loc'
  });
