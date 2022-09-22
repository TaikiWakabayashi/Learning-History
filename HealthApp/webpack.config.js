/**
 * node.js用のエクスポート文
 * 
 * node.jsが内蔵しているデフォルトであるモジュールのため、この文を書くだけで使える。
 * 
 */
const path = require('path');
/**
 * resolveで設定すると、__dirnameのパスの後に、追加した文字列がパスとして追加される。
 * 
 * console.logの出力結果は
 * 
 * __dirnameの絶対パス/dist/src になる。
 */
// path.resolve(__dirname, "dist","src");

// node.js用のエクスポート文
module.exports = {
    // 出力ファイルの形式設定
    mode: "development",
    entry: "./src/food-app/main.ts",
    output: {
        // bundle.jsを出力時、ファイル名にランダムなハッシュ値をつけることができる。
        // filename: "[contenthash]bundle.js",
        filename: "bundle.js",
        // __dirnameで今いるデリレクトりの絶対パスを設定してくれる。
        path: path.resolve(__dirname ,'dist')
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node-modules/
        }]
    },
    /**
     * resolveを設定することで、ts or jsソースファイル内のimport文の最後のパスのところで、
     * 拡張子をつけなくても良くなる。
     * 
     * 配列の中の左から順に見ていくという点に注意。
     * ↓であれば .tsであるかどうかを確認する。
     */
    resolve: {
        extensions: ['.ts', '.js']
    }
}