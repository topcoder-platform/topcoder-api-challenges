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
    root.ApChallengeMicroservice.InlineResponse20011ResultContentTerms = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse20011ResultContentTerms model module.
   * @module model/InlineResponse20011ResultContentTerms
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse20011ResultContentTerms</code>.
   * @alias module:model/InlineResponse20011ResultContentTerms
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse20011ResultContentTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011ResultContentTerms} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011ResultContentTerms} The populated <code>InlineResponse20011ResultContentTerms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('termsOfUseId'))
        obj.termsOfUseId = ApiClient.convertToType(data['termsOfUseId'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('agreeabilityType'))
        obj.agreeabilityType = ApiClient.convertToType(data['agreeabilityType'], 'String');
      if (data.hasOwnProperty('templateId'))
        obj.templateId = ApiClient.convertToType(data['templateId'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} termsOfUseId
   */
  exports.prototype.termsOfUseId = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;

  /**
   * @member {String} agreeabilityType
   */
  exports.prototype.agreeabilityType = undefined;

  /**
   * @member {String} templateId
   */
  exports.prototype.templateId = undefined;

  /**
   * @member {String} role
   */
  exports.prototype.role = undefined;

  return exports;

}));
