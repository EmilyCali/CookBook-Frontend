// var app = angular.module('cookbook_app', []);
//
// app.controller('mainController', ['$http', function($http) {
//     this.message = "recipes controller works";
//     this.notices = [];
//     this.formdata = {};
//
// //
//     // Recipe controllers
//
// //Get recipes
//
//     $http({
//         method: 'GET',
//         url: this.url + '/recipes',
//     }).then(function(response) {
//             console.log(response);
//             this.notices = response.data;
//             console.log(this.notices);
//     }.bind(this));
//
// // function to add recipes to the data base
//     this.recipeForm = function() {
//         console.log("recipeForm function ...");
//         console.log('Recipe Form Data: ', this.formdata);
//         $http({
//             method: 'POST',
//             url: this.url + '/recipes',
//             data:this.formdata
//         }).then(function (result) {console.log('Data from server: ', result);
//             this.formdata = {};
//         }.bind(this));
//     }; //end recipe form
//
//
//
//
//
//
//
//
//
//
//
//
// }]);