"use strict";
function returnStr(x) {
    if (typeof x === "string") {
        return x.toLowerCase();
    }
    return x;
}
/**
 * この時、strは
 * let str: {
    (x: string): string;
    (x: number): number;
}
 * 型となる。
 * 条件分岐が入ったinterfaceと認識される。
 */
let str = returnStr;
const str2 = function (x) {
    return 0;
};
/**
 * intersectionFunctionの型は、
 * interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
  (a: string): number;
}
 * という事になる。
 */
let intersectionFunction;
/**
 * 以下のようにインターセクションの順番を入れ替えた場合、
 * (a: string): number;
 * が優先される。
 */
let intersectionFunction2;
intersectionFunction = function (a, b) {
    return 0;
};
/**
 * unionFuncの型は、
 * let unionFunc: (a: never) => string | number
 *
 * となり、
 * 引数はnever（インターセクション ※number かつ stringな型は存在しないので）、
 * 戻り値はユニオン型となっている。
 *
 */
let unionFunc;
// 【使い方】unionFuncには両方入れることが可能。
unionFunc = (a) => {
    return a;
};
unionFunc = (a) => {
    return a;
};
