"use strict";
/**
 * Typescriptの型はこう書く！
 */
let hasValue = true;
let count = 3;
// javascript では浮動小数もマイナスも同じnumber型で定義可能。
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello";
// オブジェクトに型をつける
const person = {
    name: "Jack",
    age: 21,
};
// 配列オブジェクトの型
const fruits = ["apple", "banana", "grape"];
// タプル型
// タプルは配列内に型を書く。
const book = ["Business", 2500, false];
// pushでの追加はできてしまう。
book.push(3000);
// しかし、参照時にはエラーが出る。
/**
 * book[3]; // コンパイルエラー。
 */
// Enum型（列挙型）
// 特定のまとまった型のみを扱いたい時に使用
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
// 変更するには
coffee.size = CoffeeSize.GRANDE;
// union型
let unionType = 10;
unionType = "hello";
// 配列を入れる場合
let unionIndex = [21, "hello"];
// リテラル型
let apple = "apple";
// constではリテラル型、letではプリミティブ型
const grape = "grape";
let grape2 = "grape";
const cloth = {
    color: "red",
    size: "large",
};
// 関数（関数宣言）に型をつける
// 引数と戻り値に型をつける
function add(a, b) {
    return a + b;
}
// 関数式（関数を格納する変数）に型をつける
// 関数の型注釈では、コロンではなくアローを使用する。
const anotherAdd = add;
// コールバック関数に型をつける
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(26, (doubleNum) => {
    return doubleNum;
}); // 52
// unknown型
let unknownInput;
unknownInput = "Yeah";
// anyと同様なんでも入れられるが、使うことはできない。
let text;
// text = unknownInput; コンパイルエラー
// 利用するにはif文を挟む必要がある。
if (unknownInput === "string") {
    text = unknownInput;
}
