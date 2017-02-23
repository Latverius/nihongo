class FlexController {
  constructor() {

  }
}

angular
  .module('app')
  .component('flexComponent', {
    templateUrl: 'app/components/flexslider/flexslider.html',
    controller: FlexController
  });
