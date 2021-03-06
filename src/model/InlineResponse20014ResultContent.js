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
    root.ApChallengeMicroservice.InlineResponse20014ResultContent = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20014ResultContent model module.
   * @module model/InlineResponse20014ResultContent
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse20014ResultContent</code>.
   * @alias module:model/InlineResponse20014ResultContent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20014ResultContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014ResultContent} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014ResultContent} The populated <code>InlineResponse20014ResultContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('myChallengesCount'))
        obj.myChallengesCount = ApiClient.convertToType(data['myChallengesCount'], 'Number');
      if (data.hasOwnProperty('openChallengesCount'))
        obj.openChallengesCount = ApiClient.convertToType(data['openChallengesCount'], 'Number');
      if (data.hasOwnProperty('ongoingChallengesCount'))
        obj.ongoingChallengesCount = ApiClient.convertToType(data['ongoingChallengesCount'], 'Number');
      if (data.hasOwnProperty('allChallengesCount'))
        obj.allChallengesCount = ApiClient.convertToType(data['allChallengesCount'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} myChallengesCount
   */
  exports.prototype.myChallengesCount = undefined;

  /**
   * @member {Number} openChallengesCount
   */
  exports.prototype.openChallengesCount = undefined;

  /**
   * @member {Number} ongoingChallengesCount
   */
  exports.prototype.ongoingChallengesCount = undefined;

  /**
   * @member {Number} allChallengesCount
   */
  exports.prototype.allChallengesCount = undefined;

  return exports;

}));
