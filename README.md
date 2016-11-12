# serverless-simple-nlp-demo

This is a project intended to demostrate that Natural Language Parsing is not an impossible task to be left only to Google, Facebook, Amazon and the link. Given a small enough subject area/domain, it is possible to achieve decent parse results.
This demo uses the context of house hunting as an example for some simple Natural Language Processing, running on Amazon's Lambda service.


sample input XXX
sample output XXX
Accompanying series of blog posts for this code can be found at XXX

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
npm install
npm test
serverless project init
serverless dash deploy
```


