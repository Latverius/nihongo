class FooterController {
  constructor() {

  }
}

angular
  .module('app')
  .component('footerComponent', {
    templateUrl: 'app/components/footer/footer.html',
    controller: FooterController
  });
