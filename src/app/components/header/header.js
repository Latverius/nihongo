class HeaderController {
  constructor($http, $cookies) {
    let that = this;
    that.http = $http;
    that.user = $cookies.get('user');
    console.log("USER PSEUDO : ", $cookies.get("user"));
    if(that.user) {
      that.connected = true;
    }
    else {
      that.connected = false;
    }
  }
}

angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController,
    controllerAs: "$hc"
  });
