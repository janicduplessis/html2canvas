"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPropertyDescriptor_1 = require("../IPropertyDescriptor");
var parser_1 = require("../syntax/parser");
exports.textStrokeWidth = {
    name: '-webkit-text-stroke-width',
    initialValue: '0',
    type: IPropertyDescriptor_1.PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: function (token) {
        if (parser_1.isDimensionToken(token)) {
            return token.number;
        }
        return 0;
    }
};
//# sourceMappingURL=text-stroke-width.js.map