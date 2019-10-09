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
    describe('Challenge', function() {
      beforeEach(function() {
        instance = new ApChallengeMicroservice.Challenge();
      });

      it('should create an instance of Challenge', function() {
        // TODO: update the code to test Challenge
        expect(instance).to.be.a(ApChallengeMicroservice.Challenge);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property confidentialityType (base name: "confidentialityType")', function() {
        // TODO: update the code to test the property confidentialityType
        expect(instance).to.have.property('confidentialityType');
        // expect(instance.confidentialityType).to.be(expectedValueLiteral);
      });

      it('should have the property technologies (base name: "technologies")', function() {
        // TODO: update the code to test the property technologies
        expect(instance).to.have.property('technologies');
        // expect(instance.technologies).to.be(expectedValueLiteral);
      });

      it('should have the property subTrack (base name: "subTrack")', function() {
        // TODO: update the code to test the property subTrack
        expect(instance).to.have.property('subTrack');
        // expect(instance.subTrack).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property reviewType (base name: "reviewType")', function() {
        // TODO: update the code to test the property reviewType
        expect(instance).to.have.property('reviewType');
        // expect(instance.reviewType).to.be(expectedValueLiteral);
      });

      it('should have the property billingAccountId (base name: "billingAccountId")', function() {
        // TODO: update the code to test the property billingAccountId
        expect(instance).to.have.property('billingAccountId');
        // expect(instance.billingAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property milestoneId (base name: "milestoneId")', function() {
        // TODO: update the code to test the property milestoneId
        expect(instance).to.have.property('milestoneId');
        // expect(instance.milestoneId).to.be(expectedValueLiteral);
      });

      it('should have the property detailedRequirements (base name: "detailedRequirements")', function() {
        // TODO: update the code to test the property detailedRequirements
        expect(instance).to.have.property('detailedRequirements');
        // expect(instance.detailedRequirements).to.be(expectedValueLiteral);
      });

      it('should have the property submissionGuidelines (base name: "submissionGuidelines")', function() {
        // TODO: update the code to test the property submissionGuidelines
        expect(instance).to.have.property('submissionGuidelines');
        // expect(instance.submissionGuidelines).to.be(expectedValueLiteral);
      });

      it('should have the property registrationStartsAt (base name: "registrationStartsAt")', function() {
        // TODO: update the code to test the property registrationStartsAt
        expect(instance).to.have.property('registrationStartsAt');
        // expect(instance.registrationStartsAt).to.be(expectedValueLiteral);
      });

      it('should have the property registrationEndsAt (base name: "registrationEndsAt")', function() {
        // TODO: update the code to test the property registrationEndsAt
        expect(instance).to.have.property('registrationEndsAt');
        // expect(instance.registrationEndsAt).to.be(expectedValueLiteral);
      });

      it('should have the property checkpointSubmissionStartsAt (base name: "checkpointSubmissionStartsAt")', function() {
        // TODO: update the code to test the property checkpointSubmissionStartsAt
        expect(instance).to.have.property('checkpointSubmissionStartsAt');
        // expect(instance.checkpointSubmissionStartsAt).to.be(expectedValueLiteral);
      });

      it('should have the property checkpointSubmissionEndsAt (base name: "checkpointSubmissionEndsAt")', function() {
        // TODO: update the code to test the property checkpointSubmissionEndsAt
        expect(instance).to.have.property('checkpointSubmissionEndsAt');
        // expect(instance.checkpointSubmissionEndsAt).to.be(expectedValueLiteral);
      });

      it('should have the property submissionEndsAt (base name: "submissionEndsAt")', function() {
        // TODO: update the code to test the property submissionEndsAt
        expect(instance).to.have.property('submissionEndsAt');
        // expect(instance.submissionEndsAt).to.be(expectedValueLiteral);
      });

      it('should have the property round1Info (base name: "round1Info")', function() {
        // TODO: update the code to test the property round1Info
        expect(instance).to.have.property('round1Info');
        // expect(instance.round1Info).to.be(expectedValueLiteral);
      });

      it('should have the property round2Info (base name: "round2Info")', function() {
        // TODO: update the code to test the property round2Info
        expect(instance).to.have.property('round2Info');
        // expect(instance.round2Info).to.be(expectedValueLiteral);
      });

      it('should have the property platforms (base name: "platforms")', function() {
        // TODO: update the code to test the property platforms
        expect(instance).to.have.property('platforms');
        // expect(instance.platforms).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfCheckpointPrizes (base name: "numberOfCheckpointPrizes")', function() {
        // TODO: update the code to test the property numberOfCheckpointPrizes
        expect(instance).to.have.property('numberOfCheckpointPrizes');
        // expect(instance.numberOfCheckpointPrizes).to.be(expectedValueLiteral);
      });

      it('should have the property checkpointPrize (base name: "checkpointPrize")', function() {
        // TODO: update the code to test the property checkpointPrize
        expect(instance).to.have.property('checkpointPrize');
        // expect(instance.checkpointPrize).to.be(expectedValueLiteral);
      });

      it('should have the property finalDeliverableTypes (base name: "finalDeliverableTypes")', function() {
        // TODO: update the code to test the property finalDeliverableTypes
        expect(instance).to.have.property('finalDeliverableTypes');
        // expect(instance.finalDeliverableTypes).to.be(expectedValueLiteral);
      });

      it('should have the property prizes (base name: "prizes")', function() {
        // TODO: update the code to test the property prizes
        expect(instance).to.have.property('prizes');
        // expect(instance.prizes).to.be(expectedValueLiteral);
      });

      it('should have the property projectId (base name: "projectId")', function() {
        // TODO: update the code to test the property projectId
        expect(instance).to.have.property('projectId');
        // expect(instance.projectId).to.be(expectedValueLiteral);
      });

      it('should have the property submissionVisibility (base name: "submissionVisibility")', function() {
        // TODO: update the code to test the property submissionVisibility
        expect(instance).to.have.property('submissionVisibility');
        // expect(instance.submissionVisibility).to.be(expectedValueLiteral);
      });

      it('should have the property maxNumOfSubmissions (base name: "maxNumOfSubmissions")', function() {
        // TODO: update the code to test the property maxNumOfSubmissions
        expect(instance).to.have.property('maxNumOfSubmissions');
        // expect(instance.maxNumOfSubmissions).to.be(expectedValueLiteral);
      });

      it('should have the property task (base name: "task")', function() {
        // TODO: update the code to test the property task
        expect(instance).to.have.property('task');
        // expect(instance.task).to.be(expectedValueLiteral);
      });

      it('should have the property assignees (base name: "assignees")', function() {
        // TODO: update the code to test the property assignees
        expect(instance).to.have.property('assignees');
        // expect(instance.assignees).to.be(expectedValueLiteral);
      });

      it('should have the property copilotId (base name: "copilotId")', function() {
        // TODO: update the code to test the property copilotId
        expect(instance).to.have.property('copilotId');
        // expect(instance.copilotId).to.be(expectedValueLiteral);
      });

      it('should have the property copilotFee (base name: "copilotFee")', function() {
        // TODO: update the code to test the property copilotFee
        expect(instance).to.have.property('copilotFee');
        // expect(instance.copilotFee).to.be(expectedValueLiteral);
      });

      it('should have the property failedRegisterUsers (base name: "failedRegisterUsers")', function() {
        // TODO: update the code to test the property failedRegisterUsers
        expect(instance).to.have.property('failedRegisterUsers');
        // expect(instance.failedRegisterUsers).to.be(expectedValueLiteral);
      });

      it('should have the property environment (base name: "environment")', function() {
        // TODO: update the code to test the property environment
        expect(instance).to.have.property('environment');
        // expect(instance.environment).to.be(expectedValueLiteral);
      });

      it('should have the property codeRepo (base name: "codeRepo")', function() {
        // TODO: update the code to test the property codeRepo
        expect(instance).to.have.property('codeRepo');
        // expect(instance.codeRepo).to.be(expectedValueLiteral);
      });

      it('should have the property fixedFee (base name: "fixedFee")', function() {
        // TODO: update the code to test the property fixedFee
        expect(instance).to.have.property('fixedFee');
        // expect(instance.fixedFee).to.be(expectedValueLiteral);
      });

      it('should have the property percentageFee (base name: "percentageFee")', function() {
        // TODO: update the code to test the property percentageFee
        expect(instance).to.have.property('percentageFee');
        // expect(instance.percentageFee).to.be(expectedValueLiteral);
      });

    });
  });

}));
