interface TimestampData {
    cookie: string;
    value: string;
}
declare function tileToLoc(tile: number): number[];
declare function constructFormData(data: {}): string;
declare function random(): string;
declare function getTimestamp(): TimestampData;
declare function getBda(userAgent: string, publicKey: string, referer?: string, location?: string): string;
declare const _default: {
    DEFAULT_USER_AGENT: string;
    tileToLoc: typeof tileToLoc;
    constructFormData: typeof constructFormData;
    getBda: typeof getBda;
    apiBreakers: {
        default: (c: any) => {
            px: string;
            py: string;
            x: any;
            y: any;
        };
        method_1: (c: any) => {
            x: any;
            y: any;
        };
        method_2: (c: any) => {
            x: any;
            y: number;
        };
        method_3: (c: any) => {
            a: any;
            b: any;
        };
        method_4: (c: any) => any[];
        method_5: (c: any) => number[];
    };
    getTimestamp: typeof getTimestamp;
    random: typeof random;
};
export default _default;
