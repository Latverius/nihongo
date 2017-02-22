class MainController {
  constructor() {

  }
}

angular
  .module('app')
  .component('mainComponent', {
    templateUrl: 'app/components/main/main.html',
    controller: MainController
  });
