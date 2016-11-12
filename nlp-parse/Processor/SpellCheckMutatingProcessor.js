'use strict';

var NorvigSpell = require('../Helpers/NorvigSpell.js');
var suburbList = require('../Corpus/Suburb.js')
var dictionaryWords = require('../Corpus/Dictionary.js')

suburbList.forEach(function(suburb) {
    NorvigSpell.train(suburb);
});

dictionaryWords.forEach(function(word) {
    NorvigSpell.train(word);
});

var SpellCheckMutatingProcessor = function() {
    return {
        mutate : function(_sanitisedInputString) {
            var correctedWords = [];
            var originalWords = _sanitisedInputString.split(' ');
            originalWords.forEach(function(word) {
                correctedWords.push(NorvigSpell.correct(word));
            });
            return correctedWords.join(' ');
        }
    };
};

module.exports = SpellCheckMutatingProcessor;
