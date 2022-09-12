"use strict";
var _a, _b;
const downloadedData = {
    id: 1,
};
// userはundefined.userのプロパティにアクセスすると構文エラー
console.log(downloadedData.user);
// 解決方法
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
