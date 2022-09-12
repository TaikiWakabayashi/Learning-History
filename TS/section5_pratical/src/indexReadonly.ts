/**
 * 配列やタプルにreadonlyをつける
 *
 * 配列やタプルにreadonlyをつけるには、[]の前につける。
 * これにより、引数の数値は変更できなくなる。
 */
function advancedFn6(
  ...args: readonly [string, number, boolean?, ...number[]]
) {}
/**
 * 配列だけの場合
 */
function advancedFn7(...args: readonly number[]) {}
