class HeaderController {
  constructor($http, $rootScope) {
    let that = this;
    that.http = $http;
    that.rootScope = $rootScope;
    if(that.rootScope.user) {
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
