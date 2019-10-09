# ApChallengeMicroservice.Challenge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Challenge identifier.  This will be automatically created. | [optional] 
**confidentialityType** | **String** | Confidentiality type. This will set terms on the challenge. Current options are public or standard_cca (NDA). | [optional] 
**technologies** | [**[ChallengeTechnologies]**](ChallengeTechnologies.md) | Technology ID-Name-pairs. See https://api.topcoder.com/v2/data/technologies for full list. | [optional] 
**subTrack** | **String** | the challenge type | [optional] 
**name** | **String** | The challenge name. | [optional] 
**reviewType** | **String** | The review type of the challenge.  Setting to COMMUNITY will setup a standard community review with the review board.  INTERNAL will need to be manually assigned. | [optional] 
**billingAccountId** | **Number** | Billing account identifier. Optional. | [optional] 
**milestoneId** | **Number** | Milestone identifier. Optional. | [optional] 
**detailedRequirements** | **String** | The detail requirements for the challenge | [optional] 
**submissionGuidelines** | **String** | The submission guideline | [optional] 
**registrationStartsAt** | **Date** | ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**registrationEndsAt** | **Date** | ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**checkpointSubmissionStartsAt** | **Date** | The start date for checkpoint.  Set this to the same as registrationStartsAt in most cases. ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**checkpointSubmissionEndsAt** | **Date** | The end of the checkpoint submission phase. ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**submissionEndsAt** | **Date** | The end of the submission phase. ISO-8601 formatted date times (YYYY-MM-DDTHH:mm:ss.sssZ) | [optional] 
**round1Info** | **String** | The info for round one.  Describe what you want submitters to deliver for their checkpoint submissions. | [optional] 
**round2Info** | **String** | The info for round two. Describe what you want submitters to deliver for their final submissions. | [optional] 
**platforms** | [**[ChallengeTechnologies]**](ChallengeTechnologies.md) | Platform ID-Name-pairs.  See https://api.topcoder.com/v2/data/platforms for full list. | [optional] 
**numberOfCheckpointPrizes** | **Number** | The number of checkpoint prizes that can be awarded. | [optional] 
**checkpointPrize** | **Number** | The checkpoint prize. This amount is the prize for EACH checkpoint winner. | [optional] 
**finalDeliverableTypes** | [**[ChallengeTechnologies]**](ChallengeTechnologies.md) | Final deliverable type ID-Name-pairs.  Applies to design challenges. | [optional] 
**prizes** | **[Number]** | The prize list. Please follow standard pricing guidelines for the challenge type. | [optional] 
**projectId** | **Number** | Direct project identifier.  The challenge will be placed in this Direct project. | [optional] 
**submissionVisibility** | **Boolean** | Will submissions be publically visible when the challenge ends? | [optional] 
**maxNumOfSubmissions** | **Number** | How many submissions can each submitter submit? | [optional] 
**task** | **Boolean** | Set the challenge to be a private task. Only allowed for First2Finish and Design First2Finish | [optional] 
**assignees** | **[String]** | Preregistered users for private task, only valid when task is true | [optional] 
**copilotId** | **Number** | The copilot id to set | [optional] 
**copilotFee** | **Number** | The copilot fee for the copilot | [optional] 
**failedRegisterUsers** | [**[ChallengeFailedRegisterUsers]**](ChallengeFailedRegisterUsers.md) | Users that failed preregistering, including the reason. This is used in the response only. | [optional] 
**environment** | **String** |  | [optional] 
**codeRepo** | **String** |  | [optional] 
**fixedFee** | **Number** | The fixed fee for challenge | [optional] 
**percentageFee** | **Number** | The percentage fee for challenge | [optional] 


<a name="SubTrackEnum"></a>
## Enum: SubTrackEnum


* `WEB_DESIGNS` (value: `"WEB_DESIGNS"`)

* `dESIGNFIRST2FINISH` (value: `"DESIGN_FIRST_2_FINISH"`)

* `APPLICATION_FRONT_END_DESIGN` (value: `"APPLICATION_FRONT_END_DESIGN"`)

* `WIDGET_OR_MOBILE_SCREEN_DESIGN` (value: `"WIDGET_OR_MOBILE_SCREEN_DESIGN"`)

* `PRINT_OR_PRESENTATION` (value: `"PRINT_OR_PRESENTATION"`)

* `WIREFRAMES` (value: `"WIREFRAMES"`)

* `IDEA_GENERATION` (value: `"IDEA_GENERATION"`)

* `ARCHITECTURE` (value: `"ARCHITECTURE"`)

* `UI_PROTOTYPE_COMPETITION` (value: `"UI_PROTOTYPE_COMPETITION"`)

* `ASSEMBLY_COMPETITION` (value: `"ASSEMBLY_COMPETITION"`)

* `TEST_SUITES` (value: `"TEST_SUITES"`)

* `BUG_HUNT` (value: `"BUG_HUNT"`)

* `fIRST2FINISH` (value: `"FIRST_2_FINISH"`)

* `CODE` (value: `"CODE"`)

* `MARATHON_MATCH` (value: `"MARATHON_MATCH"`)




<a name="ReviewTypeEnum"></a>
## Enum: ReviewTypeEnum


* `COMMUNITY` (value: `"COMMUNITY"`)

* `INTERNAL` (value: `"INTERNAL"`)




