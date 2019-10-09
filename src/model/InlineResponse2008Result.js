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
    define(['ApiClient', 'model/ChallengeResponseMetadata', 'model/InlineResponse2008ResultContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChallengeResponseMetadata'), require('./InlineResponse2008ResultContent'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.InlineResponse2008Result = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.ChallengeResponseMetadata, root.ApChallengeMicroservice.InlineResponse2008ResultContent);
  }
}(this, function(ApiClient, ChallengeResponseMetadata, InlineResponse2008ResultContent) {
  'use strict';

  /**
   * The InlineResponse2008Result model module.
   * @module model/InlineResponse2008Result
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse2008Result</code>.
   * @alias module:model/InlineResponse2008Result
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2008Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008Result} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008Result} The populated <code>InlineResponse2008Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ChallengeResponseMetadata.constructFromObject(data['metadata']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], [InlineResponse2008ResultContent]);
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype.success = undefined;

  /**
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/ChallengeResponseMetadata} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {Array.<module:model/InlineResponse2008ResultContent>} content
   */
  exports.prototype.content = undefined;

  return exports;

}));
