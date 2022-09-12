"use strict";
/**
 * コンストアサーション
 */
// この段階でのmilkはstring型
let milk = "milk";
// これにより、milkはリテラル型になる。
let milk2 = "milk";
// 上記は以下と同じ
const milk3 = "milk";
/**
 * as constの使い道
 */
/**
 * 配列に使用すると、タプル型のreadonlyになる。
 *
 * const array: readonly [10, 20]
 */
const array = [10, 20];
/**
 * オブジェクトにも使用できる。
 *
 * const Person: {
    readonly name: "peter";
    readonly age: 40;
}
 * ↑型となり、かなり具体的な型として完成する。
 */
const Person = {
    name: "peter",
    age: 40,
};
