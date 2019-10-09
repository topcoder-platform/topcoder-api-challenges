# ApChallengeMicroservice.InlineResponse20012

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challengeCommunity** | **String** | The challenge community, could be \"design\" or \"develop\" | [optional] 
**challengeType** | **String** | The type of the challenge, like \"Code\", \"First2Finish\" etc. | [optional] 
**challengeName** | **String** | The name of the challenge | [optional] 
**challengeId** | **Number** | The ID of the challenge, an integer | [optional] 
**postingDate** | **Date** | The posting date of the challenge, like \"2017-11-01T20:21:00.000-04:00\" | [optional] 
**challengeEndDate** | **Date** | The end date of the challenge, like \"2017-11-01T20:21:00.000-04:00\" | [optional] 
**registrants** | **Number** | Number of registrations | [optional] 
**submissions** | **Number** | Number of submissions | [optional] 
**submissionsPassedScreening** | **Number** | Number of valid submissions | [optional] 
**drPoints** | **Number** | Could be null if not exists | [optional] 
**submissionsPercentage** | **Number** | Development challenge only, equals to the number of submissions / the number of registrants | [optional] 
**averageInitialScore** | **Number** | Development challenge only, the avarage score before appealing | [optional] 
**averageFinalScore** | **Number** | Development challenge only, the avarage score after appealing | [optional] 
**results** | [**[InlineResponse20012Results]**](InlineResponse20012Results.md) |  | [optional] 
**finalFixes** | **[String]** | An array of all final fix submissions. For Studio challenges, only exists if \"show_submissions\" is enabled. | [optional] 


<a name="ChallengeCommunityEnum"></a>
## Enum: ChallengeCommunityEnum


* `design` (value: `"design"`)

* `develop` (value: `"develop"`)




<a name="ChallengeTypeEnum"></a>
## Enum: ChallengeTypeEnum


* `componentDesign` (value: `"Component Design"`)

* `componentDevelopment` (value: `"Component Development"`)

* `componentTesting` (value: `"Component Testing"`)

* `applicationSpecification` (value: `"Application Specification"`)

* `applicationArchitecture` (value: `"Application Architecture"`)

* `bugHunt` (value: `"Bug Hunt"`)

* `testScenarios` (value: `"Test Scenarios"`)

* `testSuites` (value: `"Test Suites"`)

* `applicationAssembly` (value: `"Application Assembly"`)

* `applicationConceptualization` (value: `"Application Conceptualization"`)

* `uIPrototype` (value: `"UI Prototype"`)

* `rIABuild` (value: `"RIA Build"`)

* `rIAComponent` (value: `"RIA Component"`)

* `copilotPosting` (value: `"Copilot Posting"`)

* `contentCreation` (value: `"Content Creation"`)

* `reporting` (value: `"Reporting"`)

* `first2Finish` (value: `"First2Finish"`)

* `code` (value: `"Code"`)




