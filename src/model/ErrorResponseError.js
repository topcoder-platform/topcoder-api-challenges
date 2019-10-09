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
    root.ApChallengeMicroservice.ErrorResponseError = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorResponseError model module.
   * @module model/ErrorResponseError
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>ErrorResponseError</code>.
   * @alias module:model/ErrorResponseError
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ErrorResponseError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponseError} obj Optional instance to populate.
   * @return {module:model/ErrorResponseError} The populated <code>ErrorResponseError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('details'))
        obj.details = ApiClient.convertToType(data['details'], 'String');
    }
    return obj;
  }

  /**
   * Literal description of the HTTP code
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * HTTP code
   * @member {Number} value
   */
  exports.prototype.value = undefined;

  /**
   * Description of the error
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Details of the error
   * @member {String} details
   */
  exports.prototype.details = undefined;

  return exports;

}));
