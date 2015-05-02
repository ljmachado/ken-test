'use strict';

angular.module('kenTestApp')
    .controller('LoginController', ['$scope', '$rootScope', '$state', 'Auth', 'User', function ($scope, $rootScope, $state, $auth, $user) {
        $scope.login = function(cpf, password) {
            var credentials = {
                cpf: cpf,
                password: password
            };

            $auth.login(credentials)
                .then(function(response) {
                    credentials.access_token = response.data.access_token;
                    $user.setCurrentUser(credentials);
                    $state.go('menu');
                }, function() {
                    alert('Não foi possível autenticar, certifique-se de que você digitou o CPF e senha corretamente.')
                });
        };
    }]);
