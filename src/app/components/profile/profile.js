class ProfileController {
  constructor() {
    var that = this;
    that.user = sessionStorage.getItem('user');
    console.log(that.user[0]);
  }
}

angular
  .module('app')
  .component('profileComponent', {
    templateUrl: 'app/components/profile/profile.html',
    controller: ProfileController,
    controllerAs: '$pc'
  });
