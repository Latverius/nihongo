class HeaderController {
  constructor($http) {
    let that = this;
    that.http = $http;
    that.user = sessionStorage.getItem('user');
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
