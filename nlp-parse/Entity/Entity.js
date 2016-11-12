var Entity = function() {
    var data = {
        indexBegin : null,
        indexEnd : null,
        entityType : null,
        parsedValue : null,
        probability : null
    };


    return {
        withIndexBegin : function(_indexBegin) {
            data.indexBegin = _indexBegin;
            return this;
        },
        withIndexEnd : function(_indexEnd) {
            data.indexEnd = _indexEnd;
            return this;
        },
        withEntityType : function(_entityType) {
            data.entityType = _entityType;
            return this;
        },
        withParsedValue : function(_parsedValue) {
            data.parsedValue = _parsedValue;
            return this;
        },
        withProbability : function(_probability) {
            data.probability = _probability;
            return this;
        },
        build : function() {
            return data;
        }
    };
};

module.exports = Entity;

