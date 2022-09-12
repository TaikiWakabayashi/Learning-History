"use strict";
// 被っているものは1つでも良い。
const person1 = {
    name: "Smith",
    role: "front-end",
    usePc: "Mac",
    follower: 1000,
};
class NewPerson {
    constructor(color, hobby, age, gender, from, role) {
        this.color = color;
        this.hobby = hobby;
        this.age = age;
        this.gender = gender;
        this.from = from;
        this.role = role;
    }
}
