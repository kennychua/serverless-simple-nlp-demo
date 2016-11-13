# serverless-simple-nlp-demo

This is a project intended to demostrate that Natural Language Parsing is not an impossible task to be left only to Google, Facebook, Amazon and the link. Given a small enough subject area/domain, it is possible to achieve decent parse results.

This demo uses the context of house hunting as an example for some simple Natural Language Processing, running on Amazon's Lambda service.

Accompanying series of blog posts for this code can be found at [link coming soon!]()

Sample query : "show me apartments for sale in Sydney next Saturday"

Sample output : 
```
{
   processedInputString: "show me apartments for sale in sydney next saturday",
   entities: [
      {
         intent: [
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 3,
               parsedValue: "buy",
               probability: 0.01269635627530364
            },
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 3,
               parsedValue: "rent",
               probability: 0.0006334841628959268
            }
         ]
      },
      {
         suburb: [
            {
               indexBegin: 31,
               indexEnd: 37,
               entityType: 2,
               parsedValue: "sydney",
               probability: 1
            }
         ]
      },
      {
         date: [
            {
               indexBegin: 38,
               indexEnd: 51,
               entityType: 1,
               parsedValue: "2016-11-19T12:00:00.000Z",
               probability: 1
            }
         ]
      },
      {
         propertyType: [
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 4,
               parsedValue: "apartment",
               probability: 0.05749486652977411
            },
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 4,
               parsedValue: "house",
               probability: 0.0020533880903490765
            },
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 4,
               parsedValue: "land",
               probability: 0.002053388090349075
            }
         ]
      },
      {
         sentiment: [
            {
               indexBegin: -1,
               indexEnd: -1,
               entityType: 5,
               parsedValue: 0,
               probability: 0
            }
         ]
      }
   ]
}
```

## Live demos
### Sample Page with Text Input
This page is a simple page that takes input from a text field and calls the GET endpoint of this sample code and returns the Natural Language Parsed results

[Link](https://s3-ap-southeast-2.amazonaws.com/serverless-nlp-realestate/web/webspeechdemo1.html)

### Sample Page with Speech to Text as input
This page is a simple page that takes input from speech, converts it to text, then calls the GET endpoint of this sample code and returns the Natural Language Parsed results

[Link](https://s3-ap-southeast-2.amazonaws.com/serverless-nlp-realestate/web/webspeechdemo2.html)

## Deploying the demo on your own AWS account
This project is meant to be run and deployed on AWS Lambda, using the Serverless framework.
Tested on serverless v0.5.6 and node v.5.12.0
Once checked out, run the following commands
```
npm install -g serverless@0.5.6
npm install
npm test
serverless project init
serverless dash deploy
```


