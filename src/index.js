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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddResourceBody', 'model/Challenge', 'model/ChallengeFailedRegisterUsers', 'model/ChallengeProperties', 'model/ChallengeResponse', 'model/ChallengeResponseMetadata', 'model/ChallengeResponseResult', 'model/ChallengeTechnologies', 'model/ChallengeTypeResponse', 'model/ChallengeTypeResponseResult', 'model/ChallengeTypeResponseResultContent', 'model/ChallengeUpdate', 'model/DirectChallenge', 'model/DirectPrize', 'model/ErrorModel', 'model/ErrorModelResult', 'model/ErrorResponse', 'model/ErrorResponseError', 'model/GetResourceResponse', 'model/GetResourceResult', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse20010', 'model/InlineResponse20010Result', 'model/InlineResponse20010ResultContent', 'model/InlineResponse20010ResultRounds', 'model/InlineResponse20010ResultUserMMDetails', 'model/InlineResponse20011', 'model/InlineResponse20011Result', 'model/InlineResponse20011ResultContent', 'model/InlineResponse20011ResultContentCheckpoints', 'model/InlineResponse20011ResultContentDocuments', 'model/InlineResponse20011ResultContentEvent', 'model/InlineResponse20011ResultContentPhases', 'model/InlineResponse20011ResultContentRegistrants', 'model/InlineResponse20011ResultContentSubmissions', 'model/InlineResponse20011ResultContentSubmissions1', 'model/InlineResponse20011ResultContentTerms', 'model/InlineResponse20011ResultContentWinners', 'model/InlineResponse20012', 'model/InlineResponse20012Results', 'model/InlineResponse20013', 'model/InlineResponse20013Result', 'model/InlineResponse20013ResultContent', 'model/InlineResponse20014', 'model/InlineResponse20014Result', 'model/InlineResponse20014ResultContent', 'model/InlineResponse20015', 'model/InlineResponse20015Result', 'model/InlineResponse2001Result', 'model/InlineResponse2001ResultMetadata', 'model/InlineResponse2002', 'model/InlineResponse2002Result', 'model/InlineResponse2002ResultContent', 'model/InlineResponse2003', 'model/InlineResponse2003Result', 'model/InlineResponse2003ResultContent', 'model/InlineResponse2004', 'model/InlineResponse2004Result', 'model/InlineResponse2004ResultContent', 'model/InlineResponse2005', 'model/InlineResponse2005Result', 'model/InlineResponse2005ResultContent', 'model/InlineResponse2006', 'model/InlineResponse2006Result', 'model/InlineResponse2006ResultContent', 'model/InlineResponse2007', 'model/InlineResponse2007Result', 'model/InlineResponse2007ResultContent', 'model/InlineResponse2008', 'model/InlineResponse2008Result', 'model/InlineResponse2008ResultContent', 'model/InlineResponse2008ResultUserDetails', 'model/InlineResponse2009', 'model/InlineResponse2009Result', 'model/InlineResponse2009ResultContent', 'model/InlineResponse2009ResultRounds', 'model/InlineResponse200Result', 'model/InlineResponse200ResultContent', 'model/InlineResponse200ResultEvents', 'model/InlineResponse200ResultSubmissions', 'model/InlineResponse200ResultWinners', 'model/ManageResourceResponse', 'model/ManageResourceResult', 'model/NewChallengeBodyParam', 'model/NewPlatformBodyParam', 'model/NewTechnologyBodyParam', 'model/NormalResponse', 'model/NormalResponseResult', 'model/NullResponse', 'model/NullResponseResult', 'model/Phases', 'model/Platform', 'model/PlatformArrayResponse', 'model/PlatformArrayResponseResult', 'model/PlatformResponse', 'model/PlatformResponseResult', 'model/RemoveResourceBody', 'model/ResponseMetadata', 'model/ResponseMetadataFields', 'model/Status', 'model/Technology', 'model/TechnologyArrayResponse', 'model/TechnologyArrayResponseResult', 'model/TechnologyResponse', 'model/TechnologyResponseResult', 'model/UpdateChallengeBodyParam', 'model/ValidationErrorModel', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddResourceBody'), require('./model/Challenge'), require('./model/ChallengeFailedRegisterUsers'), require('./model/ChallengeProperties'), require('./model/ChallengeResponse'), require('./model/ChallengeResponseMetadata'), require('./model/ChallengeResponseResult'), require('./model/ChallengeTechnologies'), require('./model/ChallengeTypeResponse'), require('./model/ChallengeTypeResponseResult'), require('./model/ChallengeTypeResponseResultContent'), require('./model/ChallengeUpdate'), require('./model/DirectChallenge'), require('./model/DirectPrize'), require('./model/ErrorModel'), require('./model/ErrorModelResult'), require('./model/ErrorResponse'), require('./model/ErrorResponseError'), require('./model/GetResourceResponse'), require('./model/GetResourceResult'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse20010'), require('./model/InlineResponse20010Result'), require('./model/InlineResponse20010ResultContent'), require('./model/InlineResponse20010ResultRounds'), require('./model/InlineResponse20010ResultUserMMDetails'), require('./model/InlineResponse20011'), require('./model/InlineResponse20011Result'), require('./model/InlineResponse20011ResultContent'), require('./model/InlineResponse20011ResultContentCheckpoints'), require('./model/InlineResponse20011ResultContentDocuments'), require('./model/InlineResponse20011ResultContentEvent'), require('./model/InlineResponse20011ResultContentPhases'), require('./model/InlineResponse20011ResultContentRegistrants'), require('./model/InlineResponse20011ResultContentSubmissions'), require('./model/InlineResponse20011ResultContentSubmissions1'), require('./model/InlineResponse20011ResultContentTerms'), require('./model/InlineResponse20011ResultContentWinners'), require('./model/InlineResponse20012'), require('./model/InlineResponse20012Results'), require('./model/InlineResponse20013'), require('./model/InlineResponse20013Result'), require('./model/InlineResponse20013ResultContent'), require('./model/InlineResponse20014'), require('./model/InlineResponse20014Result'), require('./model/InlineResponse20014ResultContent'), require('./model/InlineResponse20015'), require('./model/InlineResponse20015Result'), require('./model/InlineResponse2001Result'), require('./model/InlineResponse2001ResultMetadata'), require('./model/InlineResponse2002'), require('./model/InlineResponse2002Result'), require('./model/InlineResponse2002ResultContent'), require('./model/InlineResponse2003'), require('./model/InlineResponse2003Result'), require('./model/InlineResponse2003ResultContent'), require('./model/InlineResponse2004'), require('./model/InlineResponse2004Result'), require('./model/InlineResponse2004ResultContent'), require('./model/InlineResponse2005'), require('./model/InlineResponse2005Result'), require('./model/InlineResponse2005ResultContent'), require('./model/InlineResponse2006'), require('./model/InlineResponse2006Result'), require('./model/InlineResponse2006ResultContent'), require('./model/InlineResponse2007'), require('./model/InlineResponse2007Result'), require('./model/InlineResponse2007ResultContent'), require('./model/InlineResponse2008'), require('./model/InlineResponse2008Result'), require('./model/InlineResponse2008ResultContent'), require('./model/InlineResponse2008ResultUserDetails'), require('./model/InlineResponse2009'), require('./model/InlineResponse2009Result'), require('./model/InlineResponse2009ResultContent'), require('./model/InlineResponse2009ResultRounds'), require('./model/InlineResponse200Result'), require('./model/InlineResponse200ResultContent'), require('./model/InlineResponse200ResultEvents'), require('./model/InlineResponse200ResultSubmissions'), require('./model/InlineResponse200ResultWinners'), require('./model/ManageResourceResponse'), require('./model/ManageResourceResult'), require('./model/NewChallengeBodyParam'), require('./model/NewPlatformBodyParam'), require('./model/NewTechnologyBodyParam'), require('./model/NormalResponse'), require('./model/NormalResponseResult'), require('./model/NullResponse'), require('./model/NullResponseResult'), require('./model/Phases'), require('./model/Platform'), require('./model/PlatformArrayResponse'), require('./model/PlatformArrayResponseResult'), require('./model/PlatformResponse'), require('./model/PlatformResponseResult'), require('./model/RemoveResourceBody'), require('./model/ResponseMetadata'), require('./model/ResponseMetadataFields'), require('./model/Status'), require('./model/Technology'), require('./model/TechnologyArrayResponse'), require('./model/TechnologyArrayResponseResult'), require('./model/TechnologyResponse'), require('./model/TechnologyResponseResult'), require('./model/UpdateChallengeBodyParam'), require('./model/ValidationErrorModel'), require('./api/DefaultApi'));
  }
}(function(ApiClient, AddResourceBody, Challenge, ChallengeFailedRegisterUsers, ChallengeProperties, ChallengeResponse, ChallengeResponseMetadata, ChallengeResponseResult, ChallengeTechnologies, ChallengeTypeResponse, ChallengeTypeResponseResult, ChallengeTypeResponseResultContent, ChallengeUpdate, DirectChallenge, DirectPrize, ErrorModel, ErrorModelResult, ErrorResponse, ErrorResponseError, GetResourceResponse, GetResourceResult, InlineResponse200, InlineResponse2001, InlineResponse20010, InlineResponse20010Result, InlineResponse20010ResultContent, InlineResponse20010ResultRounds, InlineResponse20010ResultUserMMDetails, InlineResponse20011, InlineResponse20011Result, InlineResponse20011ResultContent, InlineResponse20011ResultContentCheckpoints, InlineResponse20011ResultContentDocuments, InlineResponse20011ResultContentEvent, InlineResponse20011ResultContentPhases, InlineResponse20011ResultContentRegistrants, InlineResponse20011ResultContentSubmissions, InlineResponse20011ResultContentSubmissions1, InlineResponse20011ResultContentTerms, InlineResponse20011ResultContentWinners, InlineResponse20012, InlineResponse20012Results, InlineResponse20013, InlineResponse20013Result, InlineResponse20013ResultContent, InlineResponse20014, InlineResponse20014Result, InlineResponse20014ResultContent, InlineResponse20015, InlineResponse20015Result, InlineResponse2001Result, InlineResponse2001ResultMetadata, InlineResponse2002, InlineResponse2002Result, InlineResponse2002ResultContent, InlineResponse2003, InlineResponse2003Result, InlineResponse2003ResultContent, InlineResponse2004, InlineResponse2004Result, InlineResponse2004ResultContent, InlineResponse2005, InlineResponse2005Result, InlineResponse2005ResultContent, InlineResponse2006, InlineResponse2006Result, InlineResponse2006ResultContent, InlineResponse2007, InlineResponse2007Result, InlineResponse2007ResultContent, InlineResponse2008, InlineResponse2008Result, InlineResponse2008ResultContent, InlineResponse2008ResultUserDetails, InlineResponse2009, InlineResponse2009Result, InlineResponse2009ResultContent, InlineResponse2009ResultRounds, InlineResponse200Result, InlineResponse200ResultContent, InlineResponse200ResultEvents, InlineResponse200ResultSubmissions, InlineResponse200ResultWinners, ManageResourceResponse, ManageResourceResult, NewChallengeBodyParam, NewPlatformBodyParam, NewTechnologyBodyParam, NormalResponse, NormalResponseResult, NullResponse, NullResponseResult, Phases, Platform, PlatformArrayResponse, PlatformArrayResponseResult, PlatformResponse, PlatformResponseResult, RemoveResourceBody, ResponseMetadata, ResponseMetadataFields, Status, Technology, TechnologyArrayResponse, TechnologyArrayResponseResult, TechnologyResponse, TechnologyResponseResult, UpdateChallengeBodyParam, ValidationErrorModel, DefaultApi) {
  'use strict';

  /**
   * Services_that_provide_access_and_interaction_with_all_sorts_of_challenges_including_design_dev_single_round_matches_and_marathon_matches_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApChallengeMicroservice = require('index'); // See note below*.
   * var xxxSvc = new ApChallengeMicroservice.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApChallengeMicroservice.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApChallengeMicroservice.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApChallengeMicroservice.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddResourceBody model constructor.
     * @property {module:model/AddResourceBody}
     */
    AddResourceBody: AddResourceBody,
    /**
     * The Challenge model constructor.
     * @property {module:model/Challenge}
     */
    Challenge: Challenge,
    /**
     * The ChallengeFailedRegisterUsers model constructor.
     * @property {module:model/ChallengeFailedRegisterUsers}
     */
    ChallengeFailedRegisterUsers: ChallengeFailedRegisterUsers,
    /**
     * The ChallengeProperties model constructor.
     * @property {module:model/ChallengeProperties}
     */
    ChallengeProperties: ChallengeProperties,
    /**
     * The ChallengeResponse model constructor.
     * @property {module:model/ChallengeResponse}
     */
    ChallengeResponse: ChallengeResponse,
    /**
     * The ChallengeResponseMetadata model constructor.
     * @property {module:model/ChallengeResponseMetadata}
     */
    ChallengeResponseMetadata: ChallengeResponseMetadata,
    /**
     * The ChallengeResponseResult model constructor.
     * @property {module:model/ChallengeResponseResult}
     */
    ChallengeResponseResult: ChallengeResponseResult,
    /**
     * The ChallengeTechnologies model constructor.
     * @property {module:model/ChallengeTechnologies}
     */
    ChallengeTechnologies: ChallengeTechnologies,
    /**
     * The ChallengeTypeResponse model constructor.
     * @property {module:model/ChallengeTypeResponse}
     */
    ChallengeTypeResponse: ChallengeTypeResponse,
    /**
     * The ChallengeTypeResponseResult model constructor.
     * @property {module:model/ChallengeTypeResponseResult}
     */
    ChallengeTypeResponseResult: ChallengeTypeResponseResult,
    /**
     * The ChallengeTypeResponseResultContent model constructor.
     * @property {module:model/ChallengeTypeResponseResultContent}
     */
    ChallengeTypeResponseResultContent: ChallengeTypeResponseResultContent,
    /**
     * The ChallengeUpdate model constructor.
     * @property {module:model/ChallengeUpdate}
     */
    ChallengeUpdate: ChallengeUpdate,
    /**
     * The DirectChallenge model constructor.
     * @property {module:model/DirectChallenge}
     */
    DirectChallenge: DirectChallenge,
    /**
     * The DirectPrize model constructor.
     * @property {module:model/DirectPrize}
     */
    DirectPrize: DirectPrize,
    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel: ErrorModel,
    /**
     * The ErrorModelResult model constructor.
     * @property {module:model/ErrorModelResult}
     */
    ErrorModelResult: ErrorModelResult,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The ErrorResponseError model constructor.
     * @property {module:model/ErrorResponseError}
     */
    ErrorResponseError: ErrorResponseError,
    /**
     * The GetResourceResponse model constructor.
     * @property {module:model/GetResourceResponse}
     */
    GetResourceResponse: GetResourceResponse,
    /**
     * The GetResourceResult model constructor.
     * @property {module:model/GetResourceResult}
     */
    GetResourceResult: GetResourceResult,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010: InlineResponse20010,
    /**
     * The InlineResponse20010Result model constructor.
     * @property {module:model/InlineResponse20010Result}
     */
    InlineResponse20010Result: InlineResponse20010Result,
    /**
     * The InlineResponse20010ResultContent model constructor.
     * @property {module:model/InlineResponse20010ResultContent}
     */
    InlineResponse20010ResultContent: InlineResponse20010ResultContent,
    /**
     * The InlineResponse20010ResultRounds model constructor.
     * @property {module:model/InlineResponse20010ResultRounds}
     */
    InlineResponse20010ResultRounds: InlineResponse20010ResultRounds,
    /**
     * The InlineResponse20010ResultUserMMDetails model constructor.
     * @property {module:model/InlineResponse20010ResultUserMMDetails}
     */
    InlineResponse20010ResultUserMMDetails: InlineResponse20010ResultUserMMDetails,
    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011: InlineResponse20011,
    /**
     * The InlineResponse20011Result model constructor.
     * @property {module:model/InlineResponse20011Result}
     */
    InlineResponse20011Result: InlineResponse20011Result,
    /**
     * The InlineResponse20011ResultContent model constructor.
     * @property {module:model/InlineResponse20011ResultContent}
     */
    InlineResponse20011ResultContent: InlineResponse20011ResultContent,
    /**
     * The InlineResponse20011ResultContentCheckpoints model constructor.
     * @property {module:model/InlineResponse20011ResultContentCheckpoints}
     */
    InlineResponse20011ResultContentCheckpoints: InlineResponse20011ResultContentCheckpoints,
    /**
     * The InlineResponse20011ResultContentDocuments model constructor.
     * @property {module:model/InlineResponse20011ResultContentDocuments}
     */
    InlineResponse20011ResultContentDocuments: InlineResponse20011ResultContentDocuments,
    /**
     * The InlineResponse20011ResultContentEvent model constructor.
     * @property {module:model/InlineResponse20011ResultContentEvent}
     */
    InlineResponse20011ResultContentEvent: InlineResponse20011ResultContentEvent,
    /**
     * The InlineResponse20011ResultContentPhases model constructor.
     * @property {module:model/InlineResponse20011ResultContentPhases}
     */
    InlineResponse20011ResultContentPhases: InlineResponse20011ResultContentPhases,
    /**
     * The InlineResponse20011ResultContentRegistrants model constructor.
     * @property {module:model/InlineResponse20011ResultContentRegistrants}
     */
    InlineResponse20011ResultContentRegistrants: InlineResponse20011ResultContentRegistrants,
    /**
     * The InlineResponse20011ResultContentSubmissions model constructor.
     * @property {module:model/InlineResponse20011ResultContentSubmissions}
     */
    InlineResponse20011ResultContentSubmissions: InlineResponse20011ResultContentSubmissions,
    /**
     * The InlineResponse20011ResultContentSubmissions1 model constructor.
     * @property {module:model/InlineResponse20011ResultContentSubmissions1}
     */
    InlineResponse20011ResultContentSubmissions1: InlineResponse20011ResultContentSubmissions1,
    /**
     * The InlineResponse20011ResultContentTerms model constructor.
     * @property {module:model/InlineResponse20011ResultContentTerms}
     */
    InlineResponse20011ResultContentTerms: InlineResponse20011ResultContentTerms,
    /**
     * The InlineResponse20011ResultContentWinners model constructor.
     * @property {module:model/InlineResponse20011ResultContentWinners}
     */
    InlineResponse20011ResultContentWinners: InlineResponse20011ResultContentWinners,
    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012: InlineResponse20012,
    /**
     * The InlineResponse20012Results model constructor.
     * @property {module:model/InlineResponse20012Results}
     */
    InlineResponse20012Results: InlineResponse20012Results,
    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013: InlineResponse20013,
    /**
     * The InlineResponse20013Result model constructor.
     * @property {module:model/InlineResponse20013Result}
     */
    InlineResponse20013Result: InlineResponse20013Result,
    /**
     * The InlineResponse20013ResultContent model constructor.
     * @property {module:model/InlineResponse20013ResultContent}
     */
    InlineResponse20013ResultContent: InlineResponse20013ResultContent,
    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014: InlineResponse20014,
    /**
     * The InlineResponse20014Result model constructor.
     * @property {module:model/InlineResponse20014Result}
     */
    InlineResponse20014Result: InlineResponse20014Result,
    /**
     * The InlineResponse20014ResultContent model constructor.
     * @property {module:model/InlineResponse20014ResultContent}
     */
    InlineResponse20014ResultContent: InlineResponse20014ResultContent,
    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015: InlineResponse20015,
    /**
     * The InlineResponse20015Result model constructor.
     * @property {module:model/InlineResponse20015Result}
     */
    InlineResponse20015Result: InlineResponse20015Result,
    /**
     * The InlineResponse2001Result model constructor.
     * @property {module:model/InlineResponse2001Result}
     */
    InlineResponse2001Result: InlineResponse2001Result,
    /**
     * The InlineResponse2001ResultMetadata model constructor.
     * @property {module:model/InlineResponse2001ResultMetadata}
     */
    InlineResponse2001ResultMetadata: InlineResponse2001ResultMetadata,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2002Result model constructor.
     * @property {module:model/InlineResponse2002Result}
     */
    InlineResponse2002Result: InlineResponse2002Result,
    /**
     * The InlineResponse2002ResultContent model constructor.
     * @property {module:model/InlineResponse2002ResultContent}
     */
    InlineResponse2002ResultContent: InlineResponse2002ResultContent,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2003Result model constructor.
     * @property {module:model/InlineResponse2003Result}
     */
    InlineResponse2003Result: InlineResponse2003Result,
    /**
     * The InlineResponse2003ResultContent model constructor.
     * @property {module:model/InlineResponse2003ResultContent}
     */
    InlineResponse2003ResultContent: InlineResponse2003ResultContent,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2004Result model constructor.
     * @property {module:model/InlineResponse2004Result}
     */
    InlineResponse2004Result: InlineResponse2004Result,
    /**
     * The InlineResponse2004ResultContent model constructor.
     * @property {module:model/InlineResponse2004ResultContent}
     */
    InlineResponse2004ResultContent: InlineResponse2004ResultContent,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2005Result model constructor.
     * @property {module:model/InlineResponse2005Result}
     */
    InlineResponse2005Result: InlineResponse2005Result,
    /**
     * The InlineResponse2005ResultContent model constructor.
     * @property {module:model/InlineResponse2005ResultContent}
     */
    InlineResponse2005ResultContent: InlineResponse2005ResultContent,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2006Result model constructor.
     * @property {module:model/InlineResponse2006Result}
     */
    InlineResponse2006Result: InlineResponse2006Result,
    /**
     * The InlineResponse2006ResultContent model constructor.
     * @property {module:model/InlineResponse2006ResultContent}
     */
    InlineResponse2006ResultContent: InlineResponse2006ResultContent,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2007Result model constructor.
     * @property {module:model/InlineResponse2007Result}
     */
    InlineResponse2007Result: InlineResponse2007Result,
    /**
     * The InlineResponse2007ResultContent model constructor.
     * @property {module:model/InlineResponse2007ResultContent}
     */
    InlineResponse2007ResultContent: InlineResponse2007ResultContent,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2008Result model constructor.
     * @property {module:model/InlineResponse2008Result}
     */
    InlineResponse2008Result: InlineResponse2008Result,
    /**
     * The InlineResponse2008ResultContent model constructor.
     * @property {module:model/InlineResponse2008ResultContent}
     */
    InlineResponse2008ResultContent: InlineResponse2008ResultContent,
    /**
     * The InlineResponse2008ResultUserDetails model constructor.
     * @property {module:model/InlineResponse2008ResultUserDetails}
     */
    InlineResponse2008ResultUserDetails: InlineResponse2008ResultUserDetails,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The InlineResponse2009Result model constructor.
     * @property {module:model/InlineResponse2009Result}
     */
    InlineResponse2009Result: InlineResponse2009Result,
    /**
     * The InlineResponse2009ResultContent model constructor.
     * @property {module:model/InlineResponse2009ResultContent}
     */
    InlineResponse2009ResultContent: InlineResponse2009ResultContent,
    /**
     * The InlineResponse2009ResultRounds model constructor.
     * @property {module:model/InlineResponse2009ResultRounds}
     */
    InlineResponse2009ResultRounds: InlineResponse2009ResultRounds,
    /**
     * The InlineResponse200Result model constructor.
     * @property {module:model/InlineResponse200Result}
     */
    InlineResponse200Result: InlineResponse200Result,
    /**
     * The InlineResponse200ResultContent model constructor.
     * @property {module:model/InlineResponse200ResultContent}
     */
    InlineResponse200ResultContent: InlineResponse200ResultContent,
    /**
     * The InlineResponse200ResultEvents model constructor.
     * @property {module:model/InlineResponse200ResultEvents}
     */
    InlineResponse200ResultEvents: InlineResponse200ResultEvents,
    /**
     * The InlineResponse200ResultSubmissions model constructor.
     * @property {module:model/InlineResponse200ResultSubmissions}
     */
    InlineResponse200ResultSubmissions: InlineResponse200ResultSubmissions,
    /**
     * The InlineResponse200ResultWinners model constructor.
     * @property {module:model/InlineResponse200ResultWinners}
     */
    InlineResponse200ResultWinners: InlineResponse200ResultWinners,
    /**
     * The ManageResourceResponse model constructor.
     * @property {module:model/ManageResourceResponse}
     */
    ManageResourceResponse: ManageResourceResponse,
    /**
     * The ManageResourceResult model constructor.
     * @property {module:model/ManageResourceResult}
     */
    ManageResourceResult: ManageResourceResult,
    /**
     * The NewChallengeBodyParam model constructor.
     * @property {module:model/NewChallengeBodyParam}
     */
    NewChallengeBodyParam: NewChallengeBodyParam,
    /**
     * The NewPlatformBodyParam model constructor.
     * @property {module:model/NewPlatformBodyParam}
     */
    NewPlatformBodyParam: NewPlatformBodyParam,
    /**
     * The NewTechnologyBodyParam model constructor.
     * @property {module:model/NewTechnologyBodyParam}
     */
    NewTechnologyBodyParam: NewTechnologyBodyParam,
    /**
     * The NormalResponse model constructor.
     * @property {module:model/NormalResponse}
     */
    NormalResponse: NormalResponse,
    /**
     * The NormalResponseResult model constructor.
     * @property {module:model/NormalResponseResult}
     */
    NormalResponseResult: NormalResponseResult,
    /**
     * The NullResponse model constructor.
     * @property {module:model/NullResponse}
     */
    NullResponse: NullResponse,
    /**
     * The NullResponseResult model constructor.
     * @property {module:model/NullResponseResult}
     */
    NullResponseResult: NullResponseResult,
    /**
     * The Phases model constructor.
     * @property {module:model/Phases}
     */
    Phases: Phases,
    /**
     * The Platform model constructor.
     * @property {module:model/Platform}
     */
    Platform: Platform,
    /**
     * The PlatformArrayResponse model constructor.
     * @property {module:model/PlatformArrayResponse}
     */
    PlatformArrayResponse: PlatformArrayResponse,
    /**
     * The PlatformArrayResponseResult model constructor.
     * @property {module:model/PlatformArrayResponseResult}
     */
    PlatformArrayResponseResult: PlatformArrayResponseResult,
    /**
     * The PlatformResponse model constructor.
     * @property {module:model/PlatformResponse}
     */
    PlatformResponse: PlatformResponse,
    /**
     * The PlatformResponseResult model constructor.
     * @property {module:model/PlatformResponseResult}
     */
    PlatformResponseResult: PlatformResponseResult,
    /**
     * The RemoveResourceBody model constructor.
     * @property {module:model/RemoveResourceBody}
     */
    RemoveResourceBody: RemoveResourceBody,
    /**
     * The ResponseMetadata model constructor.
     * @property {module:model/ResponseMetadata}
     */
    ResponseMetadata: ResponseMetadata,
    /**
     * The ResponseMetadataFields model constructor.
     * @property {module:model/ResponseMetadataFields}
     */
    ResponseMetadataFields: ResponseMetadataFields,
    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status: Status,
    /**
     * The Technology model constructor.
     * @property {module:model/Technology}
     */
    Technology: Technology,
    /**
     * The TechnologyArrayResponse model constructor.
     * @property {module:model/TechnologyArrayResponse}
     */
    TechnologyArrayResponse: TechnologyArrayResponse,
    /**
     * The TechnologyArrayResponseResult model constructor.
     * @property {module:model/TechnologyArrayResponseResult}
     */
    TechnologyArrayResponseResult: TechnologyArrayResponseResult,
    /**
     * The TechnologyResponse model constructor.
     * @property {module:model/TechnologyResponse}
     */
    TechnologyResponse: TechnologyResponse,
    /**
     * The TechnologyResponseResult model constructor.
     * @property {module:model/TechnologyResponseResult}
     */
    TechnologyResponseResult: TechnologyResponseResult,
    /**
     * The UpdateChallengeBodyParam model constructor.
     * @property {module:model/UpdateChallengeBodyParam}
     */
    UpdateChallengeBodyParam: UpdateChallengeBodyParam,
    /**
     * The ValidationErrorModel model constructor.
     * @property {module:model/ValidationErrorModel}
     */
    ValidationErrorModel: ValidationErrorModel,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
