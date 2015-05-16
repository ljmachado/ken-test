'use strict';

angular.module('kenTestApp')
    .controller('IdentifyController', ['$scope', '$rootScope', 'Biometry', '$modal', 'DialogModal', function ($scope, $rootScope, $biometry, $modal, $dialogModal) {
        $scope.identify = function() {
            $scope.name = undefined;
            $scope.cpf = undefined;
            $scope.photo = undefined;

            $biometry.identify()
                .then(function(response) {
                    $scope.name = response.data.name;
                    $scope.cpf = response.data.cpf;
                    $scope.photo = response.data.photo;
                }, function(err) {
                    $modal.open({
                        templateUrl: 'error_modal',
                        controller: $dialogModal
                    });
                });
        };
    }]);
