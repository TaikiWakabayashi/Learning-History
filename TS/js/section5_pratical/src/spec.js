"use strict";
/**
 * 型の互換性
 */
// 関数は大 = 小 が可能。
let f1 = function add(x) {
    return x;
};
let f2 = function prime(x, y) {
    return x + y;
};
/**
 * 引数の条件がx,yの2つが絶対条件なので、
 * 必然的にf1の要件は満たす。
 * よって代入可能。
 *
 * ※実行時、javascriptの仕様上、yは省かれる。
 */
f2 = f1;
console.log(f2(10, 20)); // 10
/**
 * 逆にf1 = f2 の場合、
 * 引数が一つだけでいいf1関数に対し、2つが絶対条件のf2を代入しようとするので、
 * 型が一致しないのでエラー。
 */
// f1 = f2; エラー
/**
 * オブジェクトの場合、小 = 大 が可能。
 *
 * オブジェクトの場合は、構造的部分型の考えと同じで、
 * 条件が満たされていればプロパティが増えていても問題ないので、小 = 大で代入が可能。
 */
let f3 = function (x, y) {
    console.log(y);
    return { name: x };
};
let f4 = function (x, y) {
    return { name: x, age: y };
};
f3 = f4;
console.log(f3("AAA", 30)); // { name: 'AAA', age: 30 }
// f4 = f3; 逆にこちらはエラー。
