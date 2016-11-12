'use strict';

var LowerCaseMutatingProcessor = function() {
    return {
        mutate : function(_sanitisedInputString) {
            return _sanitisedInputString.toLowerCase();
        }
    };
};

module.exports = LowerCaseMutatingProcessor;