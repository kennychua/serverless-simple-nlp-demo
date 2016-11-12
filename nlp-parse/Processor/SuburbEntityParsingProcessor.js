'use strict';

var my_word = require('my_word');
var Entity = require('../Entity/Entity.js')
var EntityType = require('../Entity/EntityType.js')
var suburbList = require('../Corpus/Suburb.js')

var suburbs = new my_word();
suburbList.forEach(function(suburb) {
    suburbs.add(suburb.toLocaleLowerCase());
});

var SuburbEntityParsingProcessor = function() {
    return {
        parseEntities : function(_sanitisedInputString) {
            var entities = {
                suburb: []
            };
            suburbs.search(_sanitisedInputString).forEach(function(suburb) {
                entities.suburb.push(
                    new Entity()
                        .withEntityType(EntityType.SUBURB)
                        .withIndexBegin(_sanitisedInputString.indexOf(suburb))
                        .withIndexEnd(_sanitisedInputString.indexOf(suburb) + suburb.length)
                        .withParsedValue(suburb)
                        .withProbability(1)
                        .build()
                );
            });

            return entities;
        }
    };
};

module.exports = SuburbEntityParsingProcessor;
