login.controller("loginCtrl", ['$http','$rootScope', '$scope', '$state', '$location', 'loginService', 'Flash','apiService',
function ($http,$rootScope, $scope, $state, $location, loginService, Flash, apiService) {
        var vm = this;

        vm.setUser = {};
        vm.signIn = true;
        //access login
        vm.login = function (user,pass) {
            var post = $http({
                method: "POST",
                url: "https://api-stg.martcart.pk/api/v1/user/login",
                dataType: 'json',
                data: JSON.stringify({
                    userName: vm.setUser.Username,
                    password:vm.setUser.Password
                }),
                headers: { "Content-Type": "application/json" }
            });
            post.success(function (data) {
                   $state.go('app.dashboard');

            });
            post.error(function (data) {
                Flash.create('danger', 'Invalid username or Password', 'large-text');
            });
        }

    }]);

