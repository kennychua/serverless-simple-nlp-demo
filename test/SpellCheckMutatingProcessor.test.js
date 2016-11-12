var expect    = require("chai").expect;
var processor    = require("../nlp-parse/Processor/SpellCheckMutatingProcessor.js");
var spellCheckMutatingProcessor = new processor;

describe("[Processor] SpellCheckMutatingProcessor", function() {
    describe("[function] mutate", function() {

        it("should spellcheck correct suburb name", function() {
            expect(spellCheckMutatingProcessor.mutate('pymont')).to.equal('pyrmont');
        });
        it("should spellcheck correct suburb name", function() {
            expect(spellCheckMutatingProcessor.mutate('sidney')).to.equal('sydney');
        });
        it("should spellcheck correct suburb name", function() {
            expect(spellCheckMutatingProcessor.mutate('neural bai')).to.equal('neutral bay');
        });
        it("should spellcheck correct suburb name", function() {
            expect(spellCheckMutatingProcessor.mutate('drumoyne')).to.equal('drummoyne');
        });
    });
});
