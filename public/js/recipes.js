var app = angular.module('cookbook_app', []);

app.controller('mainController', ['$http', function($http) {
    this.message = "recipes controller works";

    $http({
        method: 'GET',
        url: 'http://localhost:3000/recipes',
    }).then(function(response) {
            console.log(response);
    });











}]);
