import {IPropertyListDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {CSSValue, isIdentToken} from '../syntax/parser';

export const enum PAINT_LAYER {
    NORMAL = 0,
    FILL = 1,
    STROKE = 2,
    MARKERS = 3
}

export type PaintOrder = PAINT_LAYER[];

export const paintOrder: IPropertyListDescriptor<PaintOrder> = {
    name: 'paint-order',
    initialValue: 'normal',
    prefix: false,
    type: PropertyDescriptorParsingType.LIST,
    parse: (tokens: CSSValue[]): PaintOrder => {
        const result = tokens
            .filter(isIdentToken)
            .map(token => {
                switch (token.value) {
                    case 'stroke':
                        return PAINT_LAYER.STROKE;
                    case 'fill':
                        return PAINT_LAYER.FILL;
                    case 'markers':
                        return PAINT_LAYER.MARKERS;
                }
                return PAINT_LAYER.NORMAL;
            })
            .filter(l => l !== PAINT_LAYER.NORMAL);
        if (!result.includes(PAINT_LAYER.FILL)) {
            result.push(PAINT_LAYER.FILL);
        }
        if (!result.includes(PAINT_LAYER.STROKE)) {
            result.push(PAINT_LAYER.STROKE);
        }
        if (!result.includes(PAINT_LAYER.MARKERS)) {
            result.push(PAINT_LAYER.MARKERS);
        }

        return result;
    }
};
