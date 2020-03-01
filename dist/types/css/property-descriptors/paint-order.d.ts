import { IPropertyListDescriptor } from '../IPropertyDescriptor';
export declare const enum PAINT_LAYER {
    NORMAL = 0,
    FILL = 1,
    STROKE = 2,
    MARKERS = 3
}
export declare type PaintOrder = PAINT_LAYER[];
export declare const paintOrder: IPropertyListDescriptor<PaintOrder>;
