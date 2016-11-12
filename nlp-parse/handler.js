'use strict';

var NLPParser = require('./NLPParser.js');
var SuburbEntityParsingProcessor = require('./Processor/SuburbEntityParsingProcessor.js');
var LowerCaseMutatingProcessor = require('./Processor/LowerCaseMutatingProcessor.js');
var SpellCheckMutatingProcessor = require('./Processor/SpellCheckMutatingProcessor.js');
var IntentParsingProcessor = require('./Processor/IntentParsingProcessor.js');
var DateParsingProcessor = require('./Processor/DateParsingProcessor.js');
var StripWhitespaceMutatingProcessor = require('./Processor/StripWhitespaceMutatingProcessor.js');
var PropertyTypeParsingProcessor = require('./Processor/PropertyTypeParsingProcessor.js');
var SentimentParsingProcessor = require('./Processor/SentimentParsingProcessor.js');

var self = module.exports = {
    handler: function (event, context, cb) {
        var query = "properties for sale in Neutral Bay Pyrmont next Saturday";
        if(event.query.length > 0) {
            query = event.query
        }

        var xxx = self.parseInput(query);
        return cb(null, xxx);
    },
    parseInput: function (queryString) {
        return new NLPParser(queryString)
            .parseEntities(new IntentParsingProcessor())
            .mutate(new StripWhitespaceMutatingProcessor())
            .mutate(new LowerCaseMutatingProcessor())
            .mutate(new SpellCheckMutatingProcessor())
            .parseEntities(new SuburbEntityParsingProcessor())
            .parseEntities(new DateParsingProcessor())
            .parseEntities(new PropertyTypeParsingProcessor())
            .parseEntities(new SentimentParsingProcessor())
            .result();
    }
};
