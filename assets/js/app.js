angular.module('linkApp', [])

.controller('mainController', function($scope) {
  
  $scope.theme = 'fashion';
   
  $scope.themes = [
    { name: 'Business', url: 'business' },
    { name: 'Medical', url: 'medical' },
    { name: 'Education', url: 'education' },
    { name: 'Fashion', url: 'fashion' }
  ];
  
  $scope.layout = 'full-width';
  
  $scope.layouts = [
    { name: 'Full width', url: 'full-width' },
    { name: 'Boxed', url: 'boxed' },
    { name: 'Left Side Bar', url: 'left-sidebar' }
  ];
  
});