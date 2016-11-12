var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/SuburbEntityParsingProcessor.js");
var suburbEntityParsingProcessor = new processor;

describe("[Processor] SuburbEntityParsingProcessor", function() {

    describe("[function] parseEntities", function() {
        var result = suburbEntityParsingProcessor.parseEntities("hello");

        it("should pick up single word suburbs as a single Entity", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("pyrmont");
            expect(suburbEntity.suburb.length).to.equal(1);
        });

        it("should pick up multi word suburbs as a single Entity", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("neutral bay");
            expect(suburbEntity.suburb.length).to.equal(1);
        });

        it("should pick up several multi word suburbs as a multiple Entity", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("neutral bay rose bay");
            expect(suburbEntity.suburb.length).to.equal(2);
        });

        it("should return indexBegin ", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("hello pyrmont world");
            expect(suburbEntity.suburb[0].indexBegin).to.equal(6);
        });

        it("should return indexEnd ", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("hello pyrmont world");
            expect(suburbEntity.suburb[0].indexEnd).to.equal(13);
        });

        it("should return Suburb EntityType", function() {
            var suburbEntity = suburbEntityParsingProcessor.parseEntities("property in rozelle");
            expect(suburbEntity.suburb[0].entityType).to.equal(2);
        });

    });
});