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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.InlineResponse2009ResultRounds = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2009ResultRounds model module.
   * @module model/InlineResponse2009ResultRounds
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse2009ResultRounds</code>.
   * @alias module:model/InlineResponse2009ResultRounds
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2009ResultRounds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009ResultRounds} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009ResultRounds} The populated <code>InlineResponse2009ResultRounds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('registrationStartAt'))
        obj.registrationStartAt = ApiClient.convertToType(data['registrationStartAt'], 'Date');
      if (data.hasOwnProperty('registrationEndAt'))
        obj.registrationEndAt = ApiClient.convertToType(data['registrationEndAt'], 'Date');
      if (data.hasOwnProperty('codingStartAt'))
        obj.codingStartAt = ApiClient.convertToType(data['codingStartAt'], 'Date');
      if (data.hasOwnProperty('codingEndAt'))
        obj.codingEndAt = ApiClient.convertToType(data['codingEndAt'], 'Date');
      if (data.hasOwnProperty('systemTestStartAt'))
        obj.systemTestStartAt = ApiClient.convertToType(data['systemTestStartAt'], 'Date');
      if (data.hasOwnProperty('systemTestEndAt'))
        obj.systemTestEndAt = ApiClient.convertToType(data['systemTestEndAt'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('forumId'))
        obj.forumId = ApiClient.convertToType(data['forumId'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Date} registrationStartAt
   */
  exports.prototype.registrationStartAt = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} registrationEndAt
   */
  exports.prototype.registrationEndAt = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} codingStartAt
   */
  exports.prototype.codingStartAt = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} codingEndAt
   */
  exports.prototype.codingEndAt = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} systemTestStartAt
   */
  exports.prototype.systemTestStartAt = undefined;

  /**
   * ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ)
   * @member {Date} systemTestEndAt
   */
  exports.prototype.systemTestEndAt = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} forumId
   */
  exports.prototype.forumId = undefined;

  return exports;

}));
