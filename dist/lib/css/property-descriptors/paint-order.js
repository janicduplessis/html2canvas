"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPropertyDescriptor_1 = require("../IPropertyDescriptor");
var parser_1 = require("../syntax/parser");
exports.paintOrder = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: false,
    type: IPropertyDescriptor_1.PropertyDescriptorParsingType.LIST,
    parse: function (tokens) {
        var result = tokens
            .filter(parser_1.isIdentToken)
            .map(function (token) {
            switch (token.value) {
                case 'stroke':
                    return 2 /* STROKE */;
                case 'fill':
                    return 1 /* FILL */;
                case 'markers':
                    return 3 /* MARKERS */;
            }
            return 0 /* NORMAL */;
        })
            .filter(function (l) { return l !== 0 /* NORMAL */; });
        if (!result.includes(1 /* FILL */)) {
            result.push(1 /* FILL */);
        }
        if (!result.includes(2 /* STROKE */)) {
            result.push(2 /* STROKE */);
        }
        if (!result.includes(3 /* MARKERS */)) {
            result.push(3 /* MARKERS */);
        }
        return result;
    }
};
//# sourceMappingURL=paint-order.js.map