var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/DateParsingProcessor.js");
var dateParsingProcessor = new processor;
var moment = require("moment");

describe("[Processor] DateParsingProcessor", function() {

    describe("[function] parseEntities", function() {
        dateParsingProcessor.setReferenceDate(moment('2012-07-23').toDate());

        it("should return a single date Entity", function() {
            var result = dateParsingProcessor.parseEntities('Next week monday');
            expect(result.date.length).to.equal(1);
        });

        it("should return correct indexBegin", function() {
            var result = dateParsingProcessor.parseEntities('house inspection this monday in pyrmont');
            expect(result.date[0].indexBegin).to.equal(17);
        });

        it("should return correct indexEnd", function() {
            var result = dateParsingProcessor.parseEntities('house inspection this monday in pyrmont');
            expect(result.date[0].indexEnd).to.equal(28);
        });

        it("should understand the meaning of this", function() {
            var result = dateParsingProcessor.parseEntities('this monday');
            expect(moment(result.date[0].parsedValue).isSame(moment('2012-07-23 12:00:00')), 'day').to.equal(true);
        });

        it("should understand the meaning of next", function() {
            var result = dateParsingProcessor.parseEntities('Next monday');
            expect(moment(result.date[0].parsedValue).isSame(moment('2012-07-30 12:00:00')), 'day').to.equal(true);
        });

        it("should understand a specific date", function() {
            var result = dateParsingProcessor.parseEntities('May 13');
            expect(moment(result.date[0].parsedValue).isSame(moment('2012-05-13 12:00:00')), 'day').to.equal(true);
        });

    });
});
