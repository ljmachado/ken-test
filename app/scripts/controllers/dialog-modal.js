'use strict';

angular.module('kenTestApp')
    .constant('DialogModal', ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.close = function() {
            $modalInstance.close();
        };
    }]);
