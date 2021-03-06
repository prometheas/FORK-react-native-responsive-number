export declare const deviceHeight: number;
export declare const deviceWidth: number;
export declare const widthByPercent: (stringInput: string | number) => number;
export declare const widthByRatio: (stringInput: string | number) => number;
export declare const heightByPercent: (stringInput: string | number) => number;
export declare const heightByRatio: (stringInput: string | number) => number;
export declare const responsiveLetterSpacing: (letterTrackingValue: number, fontPixel: number) => number;
export declare const letterSpacing: (letterTrackingValue: number, fontPixel: number) => number;
export declare const screenRatio: () => number;
export declare const responsiveNumber: (integer: number) => number;
export declare const responsiveNumberByHeight: (integer: number) => number;
declare const _default: {
    responsiveNumber: (integer: number) => number;
    widthByRatio: (stringInput: string | number) => number;
    heightByRatio: (stringInput: string | number) => number;
    widthByPercent: (stringInput: string | number) => number;
    heightByPercent: (stringInput: string | number) => number;
    deviceHeight: number;
    deviceWidth: number;
    screenRatio: () => number;
    responsiveLetterSpacing: (letterTrackingValue: number, fontPixel: number) => number;
};
export default _default;
