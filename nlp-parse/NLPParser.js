var NLPParser = function(_stringToParse) {
    var stringToParse = _stringToParse;
    var entities = [];

    return {
        parseEntities : function(_entityParsingProcessor) {
            entities = entities.concat(_entityParsingProcessor.parseEntities(stringToParse));
            return this;
        },
        mutate : function(_mutatingProcessor) {
            stringToParse = _mutatingProcessor.mutate(stringToParse);
            return this;
        },
        result : function() {
            return {
                processedInputString : stringToParse,
                entities : entities
            };
        }
    };
};

module.exports = NLPParser;

