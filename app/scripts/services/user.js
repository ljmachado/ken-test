'use strict';

angular
    .module('kenTestApp')
    .service('User', ['store', function(store) {
        var service = this,
            currentUser = null;

        service.setCurrentUser = function(user) {
            currentUser = user;
            store.set('user', user);

            return currentUser;
        };

        service.getCurrentUser = function() {
            if (!currentUser) {
                currentUser = store.get('user');
            }

            return currentUser;
        };
    }]);
