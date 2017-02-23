class AboutController {
  constructor() {

  }
}

angular
  .module('app')
  .component('aboutComponent', {
    templateUrl: 'app/components/about/about.html',
    controller: AboutController
  });
