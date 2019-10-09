# ApChallengeMicroservice.InlineResponse20012Results

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**handle** | **String** | The handle of the submitter | [optional] 
**placement** | **Number** | The placement of the submitter, like 1, 2. Could be n/a if not exists. | [optional] 
**submissionDate** | **Date** | The submission date, like \"2017-11-01T20:21:00.000-04:00\" | [optional] 
**submissionStatus** | **String** | The status of the submission | [optional] 
**registrationDate** | **Date** | The date of registering this challenge of the submitter, like \"2017-11-01T20:21:00.000-04:00\" | [optional] 
**points** | **Number** | The Digital Run points, could be null if not exists | [optional] 
**finalScore** | **Number** | Development challenge only, the score after appealing | [optional] 
**screeningScore** | **Number** | Development challenge only, the score of the screening, could be 0 if not applicable. | [optional] 
**initialScore** | **Number** | Development challenge only, the score before appealing | [optional] 
**clientSelection** | **Boolean** | Studio challenge only, to indicate if the submission is selected by the client | [optional] 
**submissionDownloadLink** | **String** | the download link (URL) of the submission | [optional] 
**previewDownloadLink** | **String** | Studio challenge only, the download link (URL) of the submission preview, only exists if \"show_submissions\" is enabled. | [optional] 


<a name="SubmissionStatusEnum"></a>
## Enum: SubmissionStatusEnum


* `active` (value: `"Active"`)

* `completedWithoutWin` (value: `"Completed Without Win"`)

* `failedReview` (value: `"Failed Review"`)

* `failedScreening` (value: `"Failed Screening"`)




