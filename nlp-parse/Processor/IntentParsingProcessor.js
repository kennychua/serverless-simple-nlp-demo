'use strict';

var Entity = require('../Entity/Entity.js')
var EntityType = require('../Entity/EntityType.js')

var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();

var IntentParsingProcessor = function() {
    return {
        parseEntities : function(_sanitisedInputString) {
            var entities = {
                intent : []
            };

            var buyDocuments = [
                'looking for a property to buy',
                'looking for a property to buy',
                'units for sale',
                'land for auction',
                'house to buy',
                'apartment to acquire',
                'studio to purchase'
            ];
            var rentDocuments = [
                'looking for a property to rent',
                'units for rent',
                'house to let',
                'apartment for rent',
                'studio to lease'
            ];

            classifier.addDocuments(buyDocuments, 'buy');
            classifier.addDocuments(rentDocuments, 'rent');
            classifier.train();

            classifier.getClassifications(_sanitisedInputString).forEach(function(classification) {
                entities.intent.push(
                        new Entity()
                            .withEntityType(EntityType.INTENT)
                            .withIndexBegin(-1)
                            .withIndexEnd(-1)
                            .withParsedValue(classification.label)
                            .withProbability(classification.value)
                            .build()
                    );
            });

            return entities;
        }
    };
};

module.exports = IntentParsingProcessor;
