var expect    = require("chai").expect;
var lambda    = require("../nlp-parse/handler.js");


describe("[lambda] serverless-nlp-realestate", function() {

    describe("[function] nlp-parse", function() {
        var result = lambda.parseInput("properties for sale in Neutral Bay Pyrmont next Saturday apartment this is great");
        console.log(result);

        // XXX could be better/more tests
        it("should return Object with 2 keys", function() {
            expect(Object.keys(result).length).to.equal(2);
        });

    });
});
