angular.module('EleconsApp', ['ngRoute','angular-jwt', 'btford.socket-io'])

.factory('socket', function (socketFactory) {
  return socketFactory();
})