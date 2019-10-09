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
    root.ApChallengeMicroservice.InlineResponse20011ResultContentPhases = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20011ResultContentPhases model module.
   * @module model/InlineResponse20011ResultContentPhases
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse20011ResultContentPhases</code>.
   * @alias module:model/InlineResponse20011ResultContentPhases
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20011ResultContentPhases</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011ResultContentPhases} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011ResultContentPhases} The populated <code>InlineResponse20011ResultContentPhases</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('scheduledStartTime'))
        obj.scheduledStartTime = ApiClient.convertToType(data['scheduledStartTime'], 'Date');
      if (data.hasOwnProperty('actualStartTime'))
        obj.actualStartTime = ApiClient.convertToType(data['actualStartTime'], 'Date');
      if (data.hasOwnProperty('scheduledEndTime'))
        obj.scheduledEndTime = ApiClient.convertToType(data['scheduledEndTime'], 'Date');
      if (data.hasOwnProperty('actualEndTime'))
        obj.actualEndTime = ApiClient.convertToType(data['actualEndTime'], 'Date');
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Date} scheduledStartTime
   */
  exports.prototype.scheduledStartTime = undefined;

  /**
   * @member {Date} actualStartTime
   */
  exports.prototype.actualStartTime = undefined;

  /**
   * @member {Date} scheduledEndTime
   */
  exports.prototype.scheduledEndTime = undefined;

  /**
   * @member {Date} actualEndTime
   */
  exports.prototype.actualEndTime = undefined;

  return exports;

}));
