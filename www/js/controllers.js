angular.module('lectorQR.controllers', [
  'ionic',
  'ngCordova'
]).controller('lectorController', function($scope, $cordovaBarcodeScanner){
    $scope.leerCodigo = function() {
        $cordovaBarcodeScanner.scan().then( function() {
          alert(imagenEscaneada.text);
        }, function(error){
          alert('Ha ocurrido un error ' + error);
        });
    }
});
