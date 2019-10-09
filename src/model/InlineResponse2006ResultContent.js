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
    root.ApChallengeMicroservice.InlineResponse2006ResultContent = factory(root.ApChallengeMicroservice.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The InlineResponse2006ResultContent model module.
   * @module model/InlineResponse2006ResultContent
   * @version 1.0.5
   */

  /**
   * Constructs a new <code>InlineResponse2006ResultContent</code>.
   * @alias module:model/InlineResponse2006ResultContent
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>InlineResponse2006ResultContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006ResultContent} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006ResultContent} The populated <code>InlineResponse2006ResultContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }

  /**
   * the id
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * the name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * the type
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * the status
   * @member {module:model/InlineResponse2006ResultContent.StatusEnum} status
   */
  exports.prototype.status = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    ACTIVE: "ACTIVE",

    /**
     * value: "FUTURE"
     * @const
     */
    FUTURE: "FUTURE",

    /**
     * value: "PAST"
     * @const
     */
    PAST: "PAST"
  };

  return exports;

}));
