angular.module("ModernDocApp", []).controller("CreatorController", function($scope, $rootScope, $timeout) {
  $scope.helloTo = {};
  $scope.helloTo.title = "AngularJS";
  $rootScope.$on('$includeContentLoaded', function() {
   $timeout(function(){
     $('.templateName').addClass('disabled');

     // Semantic-ui configuration methods
     $('.tabular.menu .item').tab();
     $('.ui.radio.checkbox').checkbox();
     $('select.dropdown').dropdown();
     $('.help.icon.link').popup();

     $('.ui.fluid.search.dropdown.deploys').dropdown({
       onChange: (value, text, $selectedItem) => {
         deployments = value;
       },
       onRemove: (removedValue, removedText, $removedChoice) => {
         var index = deployments.indexOf(removedValue);
         if (index > -1)
           deployments.splice(index, 1);
       },
       allowAdditions: true
     });

     $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
     });
    });
  });
});
