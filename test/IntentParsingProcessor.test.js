var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/IntentParsingProcessor.js");
var intentParsingProcessor = new processor;

describe("[Processor] IntentParsingProcessor", function() {

    describe("[function] parseEntities", function() {
        it("should return a single Entity ", function() {
            var intentEntity = intentParsingProcessor.parseEntities("purchase a property");
            expect(intentEntity.intent.length).to.equal(2);
        });

        it("should return indexBegin as -1 ", function() {
            var intentEntity = intentParsingProcessor.parseEntities("purchase a property");
            expect(intentEntity.intent[0].indexBegin).to.equal(-1);
        });

        it("should return indexEnd as -1 ", function() {
            var intentEntity = intentParsingProcessor.parseEntities("purchase a property");
            expect(intentEntity.intent[0].indexEnd).to.equal(-1);
        });

        it("should return Intent EntityType", function() {
            var intentEntity = intentParsingProcessor.parseEntities("purchase a property");
            expect(intentEntity.intent[0].entityType).to.equal(3);
        });

        it("should return buy intent", function() {
            var intentEntity = intentParsingProcessor.parseEntities("purchase a property");
            expect(intentEntity.intent[0].parsedValue).to.equal('buy');
        });

        it("should return rent intent", function() {
            var intentEntity = intentParsingProcessor.parseEntities("property for rent");
            expect(intentEntity.intent[0].parsedValue).to.equal('rent');
        });

    });
});