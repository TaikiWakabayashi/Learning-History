# exclude

コンパイルの対象外のものを設定

# include

コンパイルの対象を明示的に設定

# declaration

.d.ts ファイル（型定義ファイル）を作成する。

# sourceMap

Map ファイルの作成。
ブラウザで TypeScript を理解できるようにする時に Map ファイルを使用する。
※デバックなどで便利

# npm・yarn と package.json の関係

package.json があるフォルダがそのプロジェクトのルートディレクトリとなる。
npm・yarn は、package.json がある場所をルートディレクトリとして考え、
パッケージのインストールなどの対応を行う。

→ ディレクトリが違う場合は、そのディレクトリ内に package.json を作成する必要がある。

# lib

lib は lib.es5.ts などの型定義ファイルを指している。
[]の状態にし、中に何も記載しないと何も使わないと typescript が判断する。

コメントアウトしているときは、target によって lib にインストールするものが変わる

# rootDir

コンパイルの対象となるディレクトリを指定できるオプション。
rootDir に指定した場合、コンパイルするすべてのファイルは、rootDir に指定したルート内に入れておかなければいけない。

# noEmitOnError

ts のコンパイルで何かエラーがあった場合、ファイル等の「出力」を行わないという設定。

# strict true

"noImplicitAny": true → 暗黙的 any をコンパイルエラーにする。（明治的に使用するのは OK）

"strictNullChecks": true, → オブジェクト型(string)の null の許容を禁止する。（ユニオン型等であれば OK）  
"strictFunctionTypes": true,→ クラスの継承時に起こり得るバグを防ぐ  
"strictBindCallApply": true,→ bind,call,apply メソッドに関する設定
"strictPropertyInitialization": true, クラスを使用するとき使用する。  
"noImplicitThis": true, → this が何を示しているかわからない時エラーを飛ばす。
"useUnknownInCatchVariables": true,
"alwaysStrict" → コンパイル時、自動的に'use strict'をつけるかどうか。

の７個が全て true になる設定。

# noUnusedLocals

使っていない変数があるとコンパイル時エラーを飛ばす。
