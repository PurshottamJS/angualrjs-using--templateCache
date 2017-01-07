;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .run(function($templateCache) {
            $templateCache.put("dashboardDirective.html", "<div>This text comes from templateCache</div>")
        })
}(window, angular, undefined));
