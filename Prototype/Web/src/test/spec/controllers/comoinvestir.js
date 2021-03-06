'use strict';

describe('Controller: ComoinvestirCtrl', function () {

  // load the controller's module
  beforeEach(module('prisappApp'));

  var ComoinvestirCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComoinvestirCtrl = $controller('ComoinvestirCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComoinvestirCtrl.awesomeThings.length).toBe(3);
  });
});
