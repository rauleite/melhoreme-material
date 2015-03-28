describe("sorting the list of users", function() {
    // individual tests go here
    it('sorts in descending order by default', function() {
        // your test assertion goes here
        var users = ['jack', 'igor', 'jeff'];
        expect(users).toEqual(['jack', 'igor', 'jeff']);
    });
});



describe('GeekController', function() {
    beforeEach(module('GeekCtrl'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('GeekCtrlTESTE', function() {
        it('Se testes estao configurados', function() {
            var $scope = {};
            var controller = $controller('GeekController', { $scope: $scope });
            expect($scope).not.toBeNull();
            expect($scope).not.toBeUndefined();
        });
    });
});