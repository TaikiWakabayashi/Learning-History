/**
 * Typescriptの型はこう書く！
 */
var hasValue = true;
var count = 3;
// javascript では浮動小数もマイナスも同じnumber型で定義可能。
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
// オブジェクトに型をつける
var person = {
    name: "Jack",
    age: 21
};
// 配列オブジェクトの型
var fruits = ["apple", "banana", "grape"];
// タプル型
// タプルは配列内に型を書く。
var book = ["Business", 2500, false];
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
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// 変更するには
coffee.size = CoffeeSize.GRANDE;
// union型
var unionType = 10;
unionType = "hello";
// 配列を入れる場合
var unionIndex = [21, "hello"];
// リテラル型
var apple = "apple";
// constではリテラル型、letではプリミティブ型
var grape = "grape";
var grape2 = "grape";
var cloth = {
    color: "red",
    size: "large"
};
// 関数（関数宣言）に型をつける
// 引数と戻り値に型をつける
function add(a, b) {
    return a + b;
}
// 関数式（関数を格納する変数）に型をつける
// 関数の型注釈では、コロンではなくアローを使用する。
var anotherAdd = add;
// コールバック関数に型をつける
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(26, function (doubleNum) {
    return doubleNum;
});
