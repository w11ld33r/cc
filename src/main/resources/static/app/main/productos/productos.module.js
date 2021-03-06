(function ()
{
    'use strict';
    angular.module('mainApp.productos', [])
        .config(['$stateProvider', '$urlRouterProvider', configMainApp]);
    function configMainApp($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('mainApp.productos', {
            url: '/productos',
            resolve: {
                productos: function (ProductosService) {
                    return ProductosService.getAll().then(function (data) {
                        return data.data;
                    });
                }
            },
            views: {
                'content@mainApp': {
                    templateUrl: 'app/main/productos/productos.html',
                    controller: 'ProductosController as vm'
                }
            }
        });
    }
})();