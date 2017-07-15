angular.module("ModernDocApp", []).controller("CreatorController", function($scope, $rootScope, $timeout) {
           $scope.helloTo = {};
           $scope.helloTo.title = "AngularJS";
           $rootScope.$on('$includeContentLoaded', function() {
             $timeout(function(){
                  load();
             });
           });
        });
