'use strict';

angular
    .module('kenTestApp')
    .service('Auth', ['$http', function($http) {
        var service = this;

        service.login = function(credentials) {
            return $http.post('/api/login', credentials);
        };
    }]);

