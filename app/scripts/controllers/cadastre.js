'use strict';

angular.module('kenTestApp')
    .controller('CadastreController', ['$scope', 'Biometry', function ($scope, $biometry) {
        $scope.cadastre = function(name, photo, cpf) {
            var profile = {
                name: name,
                cpf: cpf,
                photo: photo
            };

            $biometry.create(profile)
                .then(function(response) {
                    $scope.name = '';
                    $scope.photo = '';
                    $scope.cpf = '';
                });
        };
    }]);
