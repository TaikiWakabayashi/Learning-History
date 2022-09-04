/**
 * Typescriptの型はこう書く！
 */

let hasValue: boolean = true;
let count: number = 3;
// javascript では浮動小数もマイナスも同じnumber型で定義可能。
let float: number = 3.14;
let negative: number = -0.12;

let single: string = "hello";
let double: string = "hello";

// オブジェクトに型をつける
const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};

// 配列オブジェクトの型
const fruits: string[] = ["apple", "banana", "grape"];

// タプル型
// タプルは配列内に型を書く。
const book: [string, number, boolean] = ["Business", 2500, false];

// pushでの追加はできてしまう。
book.push(3000);
// しかし、参照時にはエラーが出る。
/**
 * book[3]; // コンパイルエラー。
 */

// Enum型（列挙型）
// 特定のまとまった型のみを扱いたい時に使用
enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
// 変更するには
coffee.size = CoffeeSize.GRANDE;

// union型
let unionType: number | string = 10;
unionType = "hello";

// 配列を入れる場合
let unionIndex: (number | string)[] = [21, "hello"];

// リテラル型
let apple: "apple" = "apple";

// constではリテラル型、letではプリミティブ型
const grape = "grape";
let grape2 = "grape";

// typeエイリアス
// 型注釈を変数としてまとめる
type ClothSize = "small" | "medium" | "large";

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "red",
  size: "large",
};

// 関数（関数宣言）に型をつける
// 引数と戻り値に型をつける
function add(a: number, b: number): number {
  return a + b;
}

// 関数式（関数を格納する変数）に型をつける
// 関数の型注釈では、コロンではなくアローを使用する。
const anotherAdd: (n1: number, n2: number) => number = add;

// コールバック関数に型をつける
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum: number = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(26, (doubleNum) => {
  return doubleNum;
}); // 52

// unknown型
let unknownInput: unknown;
unknownInput = "Yeah";
// anyと同様なんでも入れられるが、使うことはできない。
let text: string;

// text = unknownInput; コンパイルエラー

// 利用するにはif文を挟む必要がある。
if (unknownInput === "string") {
  text = unknownInput;
}
