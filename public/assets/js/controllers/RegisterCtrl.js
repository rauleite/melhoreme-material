/**
 * Created by raul on 03/08/15.
 */
angular.module('RegisterCtrl', [])

    .controller('RegisterController', function($scope) {
        console.log("register");
        $scope.user = {
            name: 'Raul Abreu Leite',
            email: '',
            phone: '',
            address: 'São Paulo, SP'
        };
});