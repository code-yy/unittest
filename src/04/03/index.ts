import { getMyProfile } from "../fetchers";

export async function getGreet() {
  // テストしたいのはここのデータ取得と
  const data = await getMyProfile();
  // 取得したデータをここで連結する処理
  if (!data.name) {
    // テストする内容: 名前がなければ、定型文を返す
    return `Hello, anonymous user!`;
  }
  // テストする内容: 名前を含んだ挨拶を返す
  return `Hello, ${data.name}!`;
}
