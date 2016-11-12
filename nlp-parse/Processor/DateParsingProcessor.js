'use strict';

var Entity = require('../Entity/Entity.js')
var EntityType = require('../Entity/EntityType.js')
var chrono = require('chrono-node')

var DateParsingProcessor = function() {
    var referenceDate = new Date();
    return {
        parseEntities : function(_sanitisedInputString) {
            var entities = {
                date : []
            };

            var parsedDate = chrono.parse(_sanitisedInputString, referenceDate);
            if(parsedDate.length > 0) {
                entities.date.push(
                    new Entity()
                        .withEntityType(EntityType.DATE)
                        .withIndexBegin(parsedDate[0].index)
                        .withIndexEnd(parsedDate[0].index + parsedDate[0].text.length)
                        .withParsedValue(parsedDate[0].start.date())
                        .withProbability(1)
                        .build()
                );
            }

            return entities;
        },
        setReferenceDate : function(_referenceDate) {
            referenceDate = _referenceDate;
        }
    };
};

module.exports = DateParsingProcessor;
