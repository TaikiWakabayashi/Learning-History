/**
 * オーバーロード
 *
 * ある関数の上に関数の条件を追記する（オーバーロード）
 *
 */
function returnUpperCase(x: string): string;
// 複数書くことも可能。
function returnUpperCase(x: number): number;
function returnUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

const upperStr = returnUpperCase("Yes"); // upperStrはstring型になる。
console.log(upperStr); // YES

/**
 * オーバーロードを行うと、定義された関数の設定は無視され、定義した方に上書きされるので注意。
 */
function returnLowerCase(x: string): string;
function returnLowerCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toLowerCase();
  }
  return x;
}
// const lowerStr = returnLowerCase(789);  コンパイルエラー
