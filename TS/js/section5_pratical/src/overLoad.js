"use strict";
function returnUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperStr = returnUpperCase("Yes"); // upperStrはstring型になる。
console.log(upperStr); // YES
function returnLowerCase(x) {
    if (typeof x === "string") {
        return x.toLowerCase();
    }
    return x;
}
// const lowerStr = returnLowerCase(789);  コンパイルエラー
