import {PropertyDescriptorParsingType, IPropertyValueDescriptor} from '../IPropertyDescriptor';
import {isDimensionToken, CSSValue} from '../syntax/parser';

export const textStrokeWidth: IPropertyValueDescriptor<number> = {
    name: '-webkit-text-stroke-width',
    initialValue: '0',
    type: PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (token: CSSValue): number => {
        if (isDimensionToken(token)) {
            return token.number;
        }
        return 0;
    }
};
