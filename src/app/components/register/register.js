class RegisterController {
  constructor($http) {
    let that = this;
    that.http = $http;
    that.user = {};
    that.errors = {};
  }

  registerUser(that) {

    if(that.user.password != that.user.confirm) {
      that.errors.password = "Passwords are different ! Please retype them.";
    }
    if(that.user.pseudo.length < 3) {
      that.errors.pseudo = "Pseudo is too short, min size is 3.";
    }
    if(that.user.email.length < 5) {
      that.errors.email = "Email is too short, min size is 5.";
    }
    if(that.user.password.length < 6) {
      that.errors.passwordLength = "Password is too short, min size is 6.";
    }
    if((that.user.password == that.user.confirm) && (that.user.pseudo.length >= 3) && (that.user.email.length >= 5) && (that.user.password.length >= 6)) {
      that.errors = {};
      console.log(that.user);
      that.http.post('http://localhost:8081/register', that.user)
      .then(function(results) {
        if(results.statusText == "OK") {
          console.log("Inscription réussie !!!");

        }
      });
    }
  }
}

angular
  .module('app')
  .component('registerComponent', {
    templateUrl: 'app/components/register/register.html',
    controller: RegisterController,
    controllerAs: '$rc'
  });
