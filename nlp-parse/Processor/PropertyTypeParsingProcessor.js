'use strict';

var Entity = require('../Entity/Entity.js')
var EntityType = require('../Entity/EntityType.js')

var BayesClassifier = require('bayes-classifier');
var classifier = new BayesClassifier();

var PropertyTypeParsingProcessor = function() {
    return {
        parseEntities : function(_sanitisedInputString) {
            var entities = {
                propertyType : []
            };

            var apartmentDocuments = [
                'apartment',
                'unit',
                'flat',
                'penthouse',
                'studio'
            ];
            var houseDocuments = [
                'house',
                'duplex',
                'free standing',
                'semi detached',
                'terrace',
                'townhouse',
                'villa'
            ];
            var landDocuments = [
                'land',
                'acre',
                'acreage',
                'estate',
                'rural',
                'farm'
            ];

            classifier.addDocuments(apartmentDocuments, 'apartment');
            classifier.addDocuments(houseDocuments, 'house');
            classifier.addDocuments(landDocuments, 'land');
            classifier.train();

            classifier.getClassifications(_sanitisedInputString).forEach(function(classification) {
                entities.propertyType.push(
                    new Entity()
                        .withEntityType(EntityType.PROPERTYTYPE)
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

module.exports = PropertyTypeParsingProcessor;
