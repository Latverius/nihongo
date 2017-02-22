class HeaderController {
  constructor() {

  }
}

angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/header/header.html',
    controller: HeaderController
  });
