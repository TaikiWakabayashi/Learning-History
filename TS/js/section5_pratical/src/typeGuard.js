"use strict";
/**
 * Type Guard
 *
 * 条件式を利用して型を絞り込むこと
 */
/**
 * 方法① typeof 演算子を利用する。
 *
 * typeof演算子は指定された7つの型しか判断できない。
 * string,number,boolean,object,bigint,function,symbol
 * @param x
 * @returns
 */
function toUpperCase(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    else {
        return "";
    }
}
function describeProfile(nomadWorker) {
    // 条件分岐をしない場合は、共通しているnameのみ参照できる。
    console.log(nomadWorker.name);
    // roleがあるか in演算子に確認。
    if ("role" in nomadWorker) {
        /**
         * roleはEngineerという型にしか存在しないので
         * このif文の中ではnomadWorkerはEngineer型となり、他のプロパティにもアクセス可能。
         */
        console.log(nomadWorker.role);
        console.log(nomadWorker.usePc);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
/**
 * ③ instanceOf演算子を利用する。
 */
class Dog {
    speak() {
        console.log("わんわん");
    }
}
class Bird {
    speak() {
        console.log("ちゅんちゅん");
    }
    fly() {
        console.log("パタパタ");
    }
}
// in演算子を利用することも可能。
function havePet(pet) {
    if ("fly" in pet) {
        pet.fly();
    }
    // instanceOf演算子を利用した型ガード
    if (pet instanceof Bird) {
        pet.fly();
        pet.speak();
    }
}
havePet(new Bird()); // パタパタちゅんちゅん
