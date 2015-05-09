'use strict';

angular
    .module('kenTestApp', [
        'ngResource',
        'ui.router',
        'angular-storage'
    ])
    .config(function($httpProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .when('/menu', '/menu/cadastre')
            .otherwise("/")

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                data: {
                    requireLogin: false
                }
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'views/menu.html',
                controller: 'MenuController',
                data: {
                    requireLogin: true
                }
            })
            .state('menu.cadastre', {
                url: '/cadastre',
                templateUrl: 'views/cadastre.html',
                controller: 'CadastreController',
                data: {
                  requireLogin: true
                }
            })
            .state('menu.identify', {
                url: '/identify',
                templateUrl: 'views/identify.html',
                controller: 'IdentifyController',
                data: {
                  requireLogin: true
                }
            });
    })
    .run(['$rootScope', '$state', 'User', function($rootScope, $state, $user) {
        $rootScope.currentUser = null;

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            $rootScope.currentUser = $user.getCurrentUser();
            if (requireLogin && !$rootScope.currentUser) {
                event.preventDefault();
                $state.go('login');
            }
        });
    }]);
