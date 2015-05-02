'use strict';

angular
    .module('kenTestApp')
    .service('Biometry', ['$http', function($http) {
        var service = this;

        service.create = function(profile) {
            return $http.post('/api/biometry/create', profile);
        };
    }]);

