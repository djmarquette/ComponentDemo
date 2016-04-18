angular.module('app', ['ngMaterial'])

    // COMPONENTS
    .component('list', {
        templateUrl: 'list.html',
        bindings: {
            name: '=',
            selectedItem: '='
        },
        controller: 'listController',
        controllerAs: 'list'
    })

    .component('detail', {
        templateUrl: 'detail.html',
        bindings: {
            name: '<'
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
        require: {
            parentCtrl: '^parent'
        },
        controller: 'childController',
        controllerAs: 'child'
    })

    // CONTROLLERS
    .controller('appController', function () {
        var vm = this;

        vm.name = 'Dan';
        vm.selectedItem = {};
    })

    .controller('listController', function () {
        var vm = this;
        var selectedItem;
        this.listItems = [];
        for (var i = 0; i < 5; i++) {
            var item = {};
            item.id = i;
            item.name = 'item' + i;
            this.listItems.push(item);
        }
    })

    .controller('detailController', function () {
    })

    .controller('parentController', function () {
        this.helperFunc = function () { };
        this.refresh = function () {
            alert("Parent component refresh() called");
        }

    })

    .controller('childController', function () {
        this.$onInit = function () {
            this.change = function () {
                this.parentCtrl.refresh();
            }
        };

        this.helperFunc = function () { };
    })

    // CONFIG
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink')
            .backgroundPalette('blue-grey');
    });

