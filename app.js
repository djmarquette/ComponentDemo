angular.module('app', ['ngMaterial'])

    .component('list', {
        templateUrl: 'list.html',
        bindings: {
            name: '='
        },
        controller: 'listController',
        controllerAs: 'list'
    })

    .component('detail', {
        templateUrl: 'detail.html',
        bindings: {
            name: '=',
            change: '&'
        },
        controller: 'detailController',
        controllerAs: 'detail'
    })

    .component('parent', {
        templateUrl: 'parent.html',
        bindings: {
            name: '<'
        },
        controller: 'parentController',
        controllerAs: 'parent'
    })

    .component('child', {
        templateUrl: 'child.html',
        bindings: {
            name: '<'
        },
        controller: 'childController',
        controllerAs: 'child'
    })

    .controller('listController', function() {
        this.helperFunc = function() { };
    })

    .controller('detailController', function() {
    })

    .controller('parentController', function() {
        this.helperFunc = function() { };
    })

    .controller('childController', function() {
        this.helperFunc = function() { };
    })



    .controller('appController', function() {
        var vm = this;

        vm.name = 'Dan';

        this.change = function() {
            alert("app Change reached");
        }

    });

