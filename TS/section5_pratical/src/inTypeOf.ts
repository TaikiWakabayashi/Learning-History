/**
 * 型の中でtypeOfを使うと、便利なことがある。
 */
const Heros = {
  name: "オールマイト",
  age: 20,
} as const;
/**
 * typeofを＝演算子で利用することで、
 * 変数に指定したい型を持たせることができる。
 */
type personType = typeof Heros;
