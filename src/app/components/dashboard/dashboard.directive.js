;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .directive('dashboardDirective', dashboardDirective);
    dashboardDirective.$inject = [];

    function dashboardDirective() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "dashboardDirective.html"
        }
    }
}(window, angular, undefined));
