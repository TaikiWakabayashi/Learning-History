"use strict";
/**
 * Nullish coalescingとは
 *
 * もしundefined or Null　だった場合は、違うものを代入するという
 * 指示ができる構文
 */
var _a, _b;
const userData = (_a = downloadedData.user) !== null && _a !== void 0 ? _a : "no-user";
/**
 * 上記はor演算子を利用して似たような書き方ができる。
 *
 */
const userData2 = downloadedData.user || "no-user";
/**
 * しかし、or演算子との違いは
 * or演算子 = 空文字や0の場合もfalseとして判定してしまう。
 *
 * ?? = 空文字や0はtrueとして判定する。
 * falseにするのは undefined か nullだけ
 */
const userData3 = (_b = downloadedData.user) !== null && _b !== void 0 ? _b : "no-user";
