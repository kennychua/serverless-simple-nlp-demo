'use strict';

var StripWhitespaceMutatingProcessor = function() {
    return {
        mutate : function(_sanitisedInputString) {
            return _sanitisedInputString.replace(/^\s\s*/, '').replace(/\s\s*$/, '').replace(/\s\s*/, ' ');
        }
    };
};

module.exports = StripWhitespaceMutatingProcessor;