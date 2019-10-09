var ApChallengeMicroservice = require('./src');

var defaultClient = ApChallengeMicroservice.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new ApChallengeMicroservice.DefaultApi();

var opts = {
  limit: 3
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
apiInstance.challengesGet(opts, callback);
