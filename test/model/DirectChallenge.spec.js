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
    describe('DirectChallenge', function() {
      beforeEach(function() {
        instance = new ApChallengeMicroservice.DirectChallenge();
      });

      it('should create an instance of DirectChallenge', function() {
        // TODO: update the code to test DirectChallenge
        expect(instance).to.be.a(ApChallengeMicroservice.DirectChallenge);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property challengeName (base name: "challengeName")', function() {
        // TODO: update the code to test the property challengeName
        expect(instance).to.have.property('challengeName');
        // expect(instance.challengeName).to.be(expectedValueLiteral);
      });

      it('should have the property challengeType (base name: "challengeType")', function() {
        // TODO: update the code to test the property challengeType
        expect(instance).to.have.property('challengeType');
        // expect(instance.challengeType).to.be(expectedValueLiteral);
      });

      it('should have the property clientName (base name: "clientName")', function() {
        // TODO: update the code to test the property clientName
        expect(instance).to.have.property('clientName');
        // expect(instance.clientName).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "clientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property billingName (base name: "billingName")', function() {
        // TODO: update the code to test the property billingName
        expect(instance).to.have.property('billingName');
        // expect(instance.billingName).to.be(expectedValueLiteral);
      });

      it('should have the property billingId (base name: "billingId")', function() {
        // TODO: update the code to test the property billingId
        expect(instance).to.have.property('billingId');
        // expect(instance.billingId).to.be(expectedValueLiteral);
      });

      it('should have the property directProjectName (base name: "directProjectName")', function() {
        // TODO: update the code to test the property directProjectName
        expect(instance).to.have.property('directProjectName');
        // expect(instance.directProjectName).to.be(expectedValueLiteral);
      });

      it('should have the property directProjectId (base name: "directProjectId")', function() {
        // TODO: update the code to test the property directProjectId
        expect(instance).to.have.property('directProjectId');
        // expect(instance.directProjectId).to.be(expectedValueLiteral);
      });

      it('should have the property challengeTechnologies (base name: "challengeTechnologies")', function() {
        // TODO: update the code to test the property challengeTechnologies
        expect(instance).to.have.property('challengeTechnologies');
        // expect(instance.challengeTechnologies).to.be(expectedValueLiteral);
      });

      it('should have the property challengePlatforms (base name: "challengePlatforms")', function() {
        // TODO: update the code to test the property challengePlatforms
        expect(instance).to.have.property('challengePlatforms');
        // expect(instance.challengePlatforms).to.be(expectedValueLiteral);
      });

      it('should have the property challengeStartDate (base name: "challengeStartDate")', function() {
        // TODO: update the code to test the property challengeStartDate
        expect(instance).to.have.property('challengeStartDate');
        // expect(instance.challengeStartDate).to.be(expectedValueLiteral);
      });

      it('should have the property challengeEndDate (base name: "challengeEndDate")', function() {
        // TODO: update the code to test the property challengeEndDate
        expect(instance).to.have.property('challengeEndDate');
        // expect(instance.challengeEndDate).to.be(expectedValueLiteral);
      });

      it('should have the property challengeStatus (base name: "challengeStatus")', function() {
        // TODO: update the code to test the property challengeStatus
        expect(instance).to.have.property('challengeStatus');
        // expect(instance.challengeStatus).to.be(expectedValueLiteral);
      });

      it('should have the property challengeCreator (base name: "challengeCreator")', function() {
        // TODO: update the code to test the property challengeCreator
        expect(instance).to.have.property('challengeCreator');
        // expect(instance.challengeCreator).to.be(expectedValueLiteral);
      });

      it('should have the property prizes (base name: "prizes")', function() {
        // TODO: update the code to test the property prizes
        expect(instance).to.have.property('prizes');
        // expect(instance.prizes).to.be(expectedValueLiteral);
      });

      it('should have the property checkPointPrizes (base name: "checkPointPrizes")', function() {
        // TODO: update the code to test the property checkPointPrizes
        expect(instance).to.have.property('checkPointPrizes');
        // expect(instance.checkPointPrizes).to.be(expectedValueLiteral);
      });

      it('should have the property totalPrize (base name: "totalPrize")', function() {
        // TODO: update the code to test the property totalPrize
        expect(instance).to.have.property('totalPrize');
        // expect(instance.totalPrize).to.be(expectedValueLiteral);
      });

      it('should have the property drPoints (base name: "drPoints")', function() {
        // TODO: update the code to test the property drPoints
        expect(instance).to.have.property('drPoints');
        // expect(instance.drPoints).to.be(expectedValueLiteral);
      });

      it('should have the property reliabilityBonus (base name: "reliabilityBonus")', function() {
        // TODO: update the code to test the property reliabilityBonus
        expect(instance).to.have.property('reliabilityBonus');
        // expect(instance.reliabilityBonus).to.be(expectedValueLiteral);
      });

      it('should have the property challengeFee (base name: "challengeFee")', function() {
        // TODO: update the code to test the property challengeFee
        expect(instance).to.have.property('challengeFee');
        // expect(instance.challengeFee).to.be(expectedValueLiteral);
      });

      it('should have the property reviewCost (base name: "reviewCost")', function() {
        // TODO: update the code to test the property reviewCost
        expect(instance).to.have.property('reviewCost');
        // expect(instance.reviewCost).to.be(expectedValueLiteral);
      });

    });
  });

}));
