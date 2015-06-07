'use strict';

angular.module('chidoriApp').controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
});
