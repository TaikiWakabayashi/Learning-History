/**
 * 関数型のオーバーロード
 */
function returnStr(x: string): string;
function returnStr(x: number): number;
function returnStr(x: string | number): string | number {
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

// 明示的に定義することも可能。
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}

const str2: TmpFunc = function (x: string | number) {
  return 0;
};

/**
 * 関数型インターセクションとオーバーロード
 */
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}

/**
 * intersectionFunctionの型は、
 * interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
  (a: string): number;
}
 * という事になる。
 */
let intersectionFunction: FuncA & FuncB;

/**
 * 以下のようにインターセクションの順番を入れ替えた場合、
 * (a: string): number;
 * が優先される。
 */
let intersectionFunction2: FuncB & FuncA;
intersectionFunction = function (a: number | string, b?: string | number) {
  return 0;
};

/**
 * 関数型のユニオン型はパラメータがインターセクション・戻り値がユニオン型
 */
interface UnionFunc {
  (a: number): number;
}
interface UnionFunc2 {
  (a: string): string;
}

/**
 * unionFuncの型は、
 * let unionFunc: (a: never) => string | number
 *
 * となり、
 * 引数はnever（インターセクション ※number かつ stringな型は存在しないので）、
 * 戻り値はユニオン型となっている。
 *
 */
let unionFunc: UnionFunc | UnionFunc2;
// 【使い方】unionFuncには両方入れることが可能。
unionFunc = (a: string) => {
  return a;
};
unionFunc = (a: number) => {
  return a;
};
