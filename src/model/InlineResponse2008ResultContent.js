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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2008ResultUserDetails', 'model/InlineResponse200ResultEvents'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2008ResultUserDetails'), require('./InlineResponse200ResultEvents'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.InlineResponse2008ResultContent = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.InlineResponse2008ResultUserDetails, root.ApChallengeMicroservice.InlineResponse200ResultEvents);
  }
}(this, function(ApiClient, InlineResponse2008ResultUserDetails, InlineResponse200ResultEvents) {
  'use strict';

  /**
   * The InlineResponse2008ResultContent model module.
   * @module model/InlineResponse2008ResultContent
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse2008ResultContent</code>.
   * @alias module:model/InlineResponse2008ResultContent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2008ResultContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008ResultContent} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008ResultContent} The populated <code>InlineResponse2008ResultContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'Date');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'Date');
      if (data.hasOwnProperty('createdBy'))
        obj.createdBy = ApiClient.convertToType(data['createdBy'], 'String');
      if (data.hasOwnProperty('updatedBy'))
        obj.updatedBy = ApiClient.convertToType(data['updatedBy'], 'String');
      if (data.hasOwnProperty('technologies'))
        obj.technologies = ApiClient.convertToType(data['technologies'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('track'))
        obj.track = ApiClient.convertToType(data['track'], 'String');
      if (data.hasOwnProperty('subTrack'))
        obj.subTrack = ApiClient.convertToType(data['subTrack'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('reviewType'))
        obj.reviewType = ApiClient.convertToType(data['reviewType'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('forumId'))
        obj.forumId = ApiClient.convertToType(data['forumId'], 'Number');
      if (data.hasOwnProperty('numSubmissions'))
        obj.numSubmissions = ApiClient.convertToType(data['numSubmissions'], 'Number');
      if (data.hasOwnProperty('numRegistrants'))
        obj.numRegistrants = ApiClient.convertToType(data['numRegistrants'], 'Number');
      if (data.hasOwnProperty('registrationStartDate'))
        obj.registrationStartDate = ApiClient.convertToType(data['registrationStartDate'], 'Date');
      if (data.hasOwnProperty('registrationEndDate'))
        obj.registrationEndDate = ApiClient.convertToType(data['registrationEndDate'], 'Date');
      if (data.hasOwnProperty('checkpointSubmissionEndDate'))
        obj.checkpointSubmissionEndDate = ApiClient.convertToType(data['checkpointSubmissionEndDate'], 'Date');
      if (data.hasOwnProperty('submissionEndDate'))
        obj.submissionEndDate = ApiClient.convertToType(data['submissionEndDate'], 'Date');
      if (data.hasOwnProperty('platforms'))
        obj.platforms = ApiClient.convertToType(data['platforms'], ['String']);
      if (data.hasOwnProperty('numberOfCheckpointPrizes'))
        obj.numberOfCheckpointPrizes = ApiClient.convertToType(data['numberOfCheckpointPrizes'], 'Number');
      if (data.hasOwnProperty('totalCheckpointPrize'))
        obj.totalCheckpointPrize = ApiClient.convertToType(data['totalCheckpointPrize'], 'Number');
      if (data.hasOwnProperty('totalPrize'))
        obj.totalPrize = ApiClient.convertToType(data['totalPrize'], 'Number');
      if (data.hasOwnProperty('isPrivate'))
        obj.isPrivate = ApiClient.convertToType(data['isPrivate'], 'Boolean');
      if (data.hasOwnProperty('upcomingPhase'))
        obj.upcomingPhase = ApiClient.convertToType(data['upcomingPhase'], Object);
      if (data.hasOwnProperty('projectId'))
        obj.projectId = ApiClient.convertToType(data['projectId'], 'Number');
      if (data.hasOwnProperty('projectName'))
        obj.projectName = ApiClient.convertToType(data['projectName'], 'String');
      if (data.hasOwnProperty('currentPhases'))
        obj.currentPhases = ApiClient.convertToType(data['currentPhases'], Object);
      if (data.hasOwnProperty('allPhases'))
        obj.allPhases = ApiClient.convertToType(data['allPhases'], [Object]);
      if (data.hasOwnProperty('prize'))
        obj.prize = ApiClient.convertToType(data['prize'], ['Number']);
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [InlineResponse200ResultEvents]);
      if (data.hasOwnProperty('drPoints'))
        obj.drPoints = ApiClient.convertToType(data['drPoints'], 'Number');
      if (data.hasOwnProperty('reliabilityBonus'))
        obj.reliabilityBonus = ApiClient.convertToType(data['reliabilityBonus'], 'Number');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'Number');
      if (data.hasOwnProperty('handle'))
        obj.handle = ApiClient.convertToType(data['handle'], 'String');
      if (data.hasOwnProperty('isTask'))
        obj.isTask = ApiClient.convertToType(data['isTask'], 'Number');
      if (data.hasOwnProperty('environment'))
        obj.environment = ApiClient.convertToType(data['environment'], 'String');
      if (data.hasOwnProperty('codeRepo'))
        obj.codeRepo = ApiClient.convertToType(data['codeRepo'], 'String');
      if (data.hasOwnProperty('groupIds'))
        obj.groupIds = ApiClient.convertToType(data['groupIds'], ['Number']);
      if (data.hasOwnProperty('userDetails'))
        obj.userDetails = InlineResponse2008ResultUserDetails.constructFromObject(data['userDetails']);
    }
    return obj;
  }

  /**
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {String} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {String} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  /**
   * @member {Array.<String>} technologies
   */
  exports.prototype.technologies = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} track
   */
  exports.prototype.track = undefined;

  /**
   * @member {String} subTrack
   */
  exports.prototype.subTrack = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} reviewType
   */
  exports.prototype.reviewType = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} forumId
   */
  exports.prototype.forumId = undefined;

  /**
   * @member {Number} numSubmissions
   */
  exports.prototype.numSubmissions = undefined;

  /**
   * @member {Number} numRegistrants
   */
  exports.prototype.numRegistrants = undefined;

  /**
   * @member {Date} registrationStartDate
   */
  exports.prototype.registrationStartDate = undefined;

  /**
   * @member {Date} registrationEndDate
   */
  exports.prototype.registrationEndDate = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} checkpointSubmissionEndDate
   */
  exports.prototype.checkpointSubmissionEndDate = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} submissionEndDate
   */
  exports.prototype.submissionEndDate = undefined;

  /**
   * @member {Array.<String>} platforms
   */
  exports.prototype.platforms = undefined;

  /**
   * @member {Number} numberOfCheckpointPrizes
   */
  exports.prototype.numberOfCheckpointPrizes = undefined;

  /**
   * @member {Number} totalCheckpointPrize
   */
  exports.prototype.totalCheckpointPrize = undefined;

  /**
   * @member {Number} totalPrize
   */
  exports.prototype.totalPrize = undefined;

  /**
   * @member {Boolean} isPrivate
   */
  exports.prototype.isPrivate = undefined;

  /**
   * @member {Object} upcomingPhase
   */
  exports.prototype.upcomingPhase = undefined;

  /**
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * The related project name, only shown for admin
   * @member {String} projectName
   */
  exports.prototype.projectName = undefined;

  /**
   * @member {Object} currentPhases
   */
  exports.prototype.currentPhases = undefined;

  /**
   * @member {Array.<Object>} allPhases
   */
  exports.prototype.allPhases = undefined;

  /**
   * @member {Array.<Number>} prize
   */
  exports.prototype.prize = undefined;

  /**
   * @member {Array.<module:model/InlineResponse200ResultEvents>} events
   */
  exports.prototype.events = undefined;

  /**
   * @member {Number} drPoints
   */
  exports.prototype.drPoints = undefined;

  /**
   * @member {Number} reliabilityBonus
   */
  exports.prototype.reliabilityBonus = undefined;

  /**
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * @member {String} handle
   */
  exports.prototype.handle = undefined;

  /**
   * @member {Number} isTask
   */
  exports.prototype.isTask = undefined;

  /**
   * @member {String} environment
   */
  exports.prototype.environment = undefined;

  /**
   * @member {String} codeRepo
   */
  exports.prototype.codeRepo = undefined;

  /**
   * @member {Array.<Number>} groupIds
   */
  exports.prototype.groupIds = undefined;

  /**
   * @member {module:model/InlineResponse2008ResultUserDetails} userDetails
   */
  exports.prototype.userDetails = undefined;

  return exports;

}));
