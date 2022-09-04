# exclude

コンパイルの対象外のものを設定

# include

コンパイルの対象を明示的に設定

# declaration

.d.ts ファイル（型定義ファイル）を作成する。

# sourceMap

Map ファイルの作成。
ブラウザで TypeScript を理解できるようにする時に Map ファイルを使用する。

# npm・yarn と package.json の関係

package.json があるフォルダがそのプロジェクトのルートディレクトリとなる。
npm・yarn は、package.json がある場所をルートディレクトリとして考え、
パッケージのインストールなどの対応を行う。

→ ディレクトリが違う場合は、そのディレクトリ内に package.json を作成する必要がある。
