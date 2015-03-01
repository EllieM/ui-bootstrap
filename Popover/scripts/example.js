 angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
 
angular.module('ui.bootstrap.demo').controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
});