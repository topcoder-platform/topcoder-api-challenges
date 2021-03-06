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
    root.ApChallengeMicroservice.ChallengeTypeResponseResultContent = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChallengeTypeResponseResultContent model module.
   * @module model/ChallengeTypeResponseResultContent
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>ChallengeTypeResponseResultContent</code>.
   * @alias module:model/ChallengeTypeResponseResultContent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ChallengeTypeResponseResultContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeTypeResponseResultContent} obj Optional instance to populate.
   * @return {module:model/ChallengeTypeResponseResultContent} The populated <code>ChallengeTypeResponseResultContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('subTrack'))
        obj.subTrack = ApiClient.convertToType(data['subTrack'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} subTrack
   */
  exports.prototype.subTrack = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  return exports;

}));
