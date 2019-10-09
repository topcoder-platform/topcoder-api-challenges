# ApChallengeMicroservice.InlineResponse2003ResultContent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phaseType** | **String** | the phase type | [optional] 
**status** | **String** | the status | [optional] 
**fixedStarTime** | **Date** | fixed start time ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**scheduledStarTime** | **Date** | the scheduled start time ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**scheduledEndTime** | **Date** | the scheduled end time ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**actualStartTime** | **Date** | the actual start time ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**actualEndTime** | **Date** | the actual end time ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**duration** | **String** | the duration | [optional] 


<a name="PhaseTypeEnum"></a>
## Enum: PhaseTypeEnum


* `registration` (value: `"Registration"`)

* `submission` (value: `"Submission"`)

* `screening` (value: `"Screening"`)

* `review` (value: `"Review"`)

* `appeals` (value: `"Appeals"`)

* `appealsResponse` (value: `"Appeals Response"`)

* `aggregation` (value: `"Aggregation"`)

* `aggregationReview` (value: `"Aggregation Review"`)

* `finalFix` (value: `"Final Fix"`)

* `finalReview` (value: `"Final Review"`)

* `approval` (value: `"Approval"`)

* `postMortem` (value: `"Post-Mortem"`)

* `specificationSubmission` (value: `"Specification Submission"`)

* `specificationReview` (value: `"Specification Review"`)

* `checkpointSubmission` (value: `"Checkpoint Submission"`)

* `checkpointScreening` (value: `"Checkpoint Screening"`)

* `checkpointReview` (value: `"Checkpoint Review"`)

* `iterativeReview` (value: `"Iterative Review"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `scheduled` (value: `"Scheduled"`)

* `open` (value: `"Open"`)

* `closed` (value: `"Closed"`)




