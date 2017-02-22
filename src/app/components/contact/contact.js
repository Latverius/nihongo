class ContactController {
  constructor() {

  }
}

angular
  .module('app')
  .component('contactComponent', {
    templateUrl: 'app/components/contact/contact.html',
    controller: ContactController
  });
