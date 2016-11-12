'use strict';

var Entity = require('../Entity/Entity.js')
var EntityType = require('../Entity/EntityType.js')
var sentiment = require('sentiment');

var SentimentParsingProcessor = function() {
    return {
        parseEntities : function(_sanitisedInputString) {
            var entities = {
                sentiment: []
            };

            var result = sentiment(_sanitisedInputString);

            if(result) {
                entities.sentiment.push(
                    new Entity()
                        .withEntityType(EntityType.SENTIMENT)
                        .withIndexBegin(-1)
                        .withIndexEnd(-1)
                        .withParsedValue(result.score)
                        .withProbability(result.comparative)
                        .build()
                );
            }

            return entities;
        }
    };
};

module.exports = SentimentParsingProcessor;
