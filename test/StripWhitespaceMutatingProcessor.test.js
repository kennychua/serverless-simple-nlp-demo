var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/StripWhitespaceMutatingProcessor.js");
var stripWhitespaceMutatingProcessor = new processor;

describe("[Processor] StripWhitespaceMutatingProcessor", function() {
    describe("[function] mutate", function() {

        it("should strip whitespace at end of string", function() {
            expect(stripWhitespaceMutatingProcessor.mutate("hello world      ")).to.equal('hello world');
        });

        it("should strip whitespace at start of string", function() {
            expect(stripWhitespaceMutatingProcessor.mutate("     hello world")).to.equal('hello world');
        });

        it("should strip whitespace in middle of string", function() {
            expect(stripWhitespaceMutatingProcessor.mutate("hello    world")).to.equal('hello world');
        });
    });
});
