"use strict";
// タグ付けユニオンによる条件分岐
function checkType(obj) {
    switch (obj.kind) {
        case "back-end":
            console.log(obj.position);
            break;
        case "Typescript":
            console.log(obj.role);
            break;
    }
}
