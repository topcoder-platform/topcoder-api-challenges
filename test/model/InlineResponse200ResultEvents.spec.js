/*
 * ap-challenge-microservice
 * Services that provide access and interaction with all sorts of challenges, including design, dev, single round matches, and marathon matches. 
 *
 * OpenAPI spec version: 1.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApChallengeMicroservice);
  }
}(this, function(expect, ApChallengeMicroservice) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse200ResultEvents', function() {
      beforeEach(function() {
        instance = new ApChallengeMicroservice.InlineResponse200ResultEvents();
      });

      it('should create an instance of InlineResponse200ResultEvents', function() {
        // TODO: update the code to test InlineResponse200ResultEvents
        expect(instance).to.be.a(ApChallengeMicroservice.InlineResponse200ResultEvents);
      });

      it('should have the property eventId (base name: "eventId")', function() {
        // TODO: update the code to test the property eventId
        expect(instance).to.have.property('eventId');
        // expect(instance.eventId).to.be(expectedValueLiteral);
      });

      it('should have the property eventName (base name: "eventName")', function() {
        // TODO: update the code to test the property eventName
        expect(instance).to.have.property('eventName');
        // expect(instance.eventName).to.be(expectedValueLiteral);
      });

      it('should have the property projectId (base name: "projectId")', function() {
        // TODO: update the code to test the property projectId
        expect(instance).to.have.property('projectId');
        // expect(instance.projectId).to.be(expectedValueLiteral);
      });

    });
  });

}));
