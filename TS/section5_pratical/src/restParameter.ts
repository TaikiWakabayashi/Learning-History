/**
 * レストパラメータに配列やタプルを指定する方法
 */

/**
 * レストパラメータ
 * ...をつける事で配列として引数を使える。
 */
function advancedFn(...args: number[]) {}
advancedFn(0, 4, 6, 8);

/**
 * レストパラメータをタプル型にすると、
 * 関数に入れられる引数の数はタプルの指定した文の数だけになる。
 */

function advancedFn2(...args: [string, number, boolean]) {}
advancedFn2("str", 3, true); // 追加するとエラー。

/**
 * タプル　＋　オプショナルパラメータ
 * 引数の型の後ろに？をつけるだけ
 *
 * ※？をつけるなら一番後ろから！！
 */
function advancedFn3(...args: [string, number, boolean?]) {}
advancedFn3("str", 4);

/**
 *
 * タプルの中にレストパラメータを与えることも可能。
 */
function advancedFn4(...args: [string, number, boolean, ...number[]]) {}
advancedFn4("str", 3, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

/**
 * レストパラメータ + タプル + オプショナル + レストパラメータ
 */
function advancedFn5(...args: [string, number, boolean?, ...number[]]) {}
/**
 * この時、boolean型を引数に与えなかった場合は、
 * 次の引数のレストパラメータに行きつかないので注意。
 */
advancedFn5("str", 9, false, 1, 2, 3);
// advancedFn5("str",9,1,2,3); error
