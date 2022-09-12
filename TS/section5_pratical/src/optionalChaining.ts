/**
 * オプショナルチェーン
 *
 * undefinedもしくはnullのものに対し、構文エラーを起こさせない記法
 */
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};
// userはundefined.userのプロパティにアクセスすると構文エラー
console.log(downloadedData.user);

// 解決方法
console.log(downloadedData.user?.name?.first);
