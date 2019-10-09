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
    define(['ApiClient', 'model/PlatformResponseResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlatformResponseResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ApChallengeMicroservice) {
      root.ApChallengeMicroservice = {};
    }
    root.ApChallengeMicroservice.PlatformResponse = factory(root.ApChallengeMicroservice.ApiClient, root.ApChallengeMicroservice.PlatformResponseResult);
  }
}(this, function(ApiClient, PlatformResponseResult) {
  'use strict';

  /**
   * The PlatformResponse model module.
   * @module model/PlatformResponse
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>PlatformResponse</code>.
   * @alias module:model/PlatformResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PlatformResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlatformResponse} obj Optional instance to populate.
   * @return {module:model/PlatformResponse} The populated <code>PlatformResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = PlatformResponseResult.constructFromObject(data['result']);
    }
    return obj;
  }

  /**
   * unique id identifying the request
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {module:model/PlatformResponseResult} result
   */
  exports.prototype.result = undefined;

  return exports;

}));
