'use strict';

angular.module('chidoriApp').controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
});
