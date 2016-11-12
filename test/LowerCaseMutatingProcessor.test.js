var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/LowerCaseMutatingProcessor.js");
var lowerCaseMutatingProcessor = new processor;

describe("[Processor] LowerCaseMutatingProcessor", function() {
    describe("[function] mutate", function() {
        var result = lowerCaseMutatingProcessor.mutate("HELLO wOrlD");

        it("should return lowercase input string", function() {
            expect(result).to.equal('hello world');
        });
    });
});
