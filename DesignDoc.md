# background

普段その場の値段で買い物をしているので、時期や店舗による違いをみたい

OCRはレシートくらいなら一通り開拓された分野のはずで、開発練習のいいネタ

# objective

撮影したレシートをOCRした結果をCSV形式に落とし込み、同種の買い物の価格を比較する。


# what it does

大手が提供するAPIに画像を投げて、結果を取得し、parseする


# what it does NOT

データ分析基盤の提供
OCRモデルの自前での開発
Vision APIの結果に対する修正
Vision APIが上手くいくような画像補正
ちゃんとしたDB（interfaceだけ用意して、中身はcsvにする）
デプロイ

# environment

web
localhost

# overview

1. フロントから撮影した画像を取得
2. 撮影した画像をアップロード
3. アップロードされた画像を保存する
4. 保存されている画像をAPIに送る
5. 結果を受け取ってparseする
6. 整理された結果をDBに格納

DBには別の方法でアクセス

## 記述選定
### 試したいこと
* 自動テスト
* React Hooks
* typescript <s> gRPC </s>
* google vision API
* github projects

### 採用
gRPCはVision APIになかったので、なしだが、
それ以外は試したいこと全部採用

### その他検討
AWSにもtextractというAPIがあるが、pythonしかコードサンプルがないので、とりあえず無視する。一方で、OCRの結果をweb上でGUIで確認して、exportしたりもできるので、Vision APIがわからなければスイッチもあり。値段は、月100円いかない。Vision APIの方はある程度まで無料
# detail
## 格納するデータ
### 必須項目
#### レシート単位
購入場所、購入店舗、購入日時
#### レシートごとに複数ある項目
購入商品、金額、個数
### あれば嬉しい
レシート撮影日時、会計総額（OCR結果の確認につかえる？）、税込みが税抜きか
## 格納形式
テーブルは分けず、
1recordあたり、「購入場所、購入店舗、購入日時、購入商品、個数、金額」をひたすらcsvに積んでいく。


## 各ステップ詳細
### 1フロントから撮影した画像を取得
react のカメラにアクセスするコンポーネントを使って、画像を撮影
コンポーネント：
画像の形式：
画像のサイズ：
### 2撮影した画像をアップロード
ローカルホストに立てたbackendに画像を非同期で送る(アップロード)
コンポーネント：fetch API?
### 3アップロードされた画像を保存する
localhostにサーバーを立てておき、画像を受け取る。
ローカルに画像を保存する
サーバー：
画像の保存形式：

### 4保存されている画像をAPIに送る
画像をロードしてきて、<s>gRPCで</s>Google Vision APIを叩く
送って結果を受け取る部分は単一モジュールとして切り出し、もし自前でOCRモデルを立てたら挿げ替えられるようにする
requestの形式：
画像はBase64でエンコードして送る
画像ファイルサイズ：20MB上限
JSON リクエスト オブジェクト サイズ: 10 MB上限
Base64でエンコードすると、サイズが大きくなる（こおが多い）。サイズがoverする場合、アップロードしてからURLを送るなど、対応が必要
https://cloud.google.com/vision/docs/ocr?hl=ja#vision_text_detection-drest

```
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file
const [result] = await client.textDetection(fileName);
const detections = result.textAnnotations;
console.log('Text:');
detections.forEach(text => console.log(text));
```
[GitHub](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.js)

### 5結果を受け取ってparseする
APIが上手く結果を返してきたか判定
成功　ー＞　結果を保存しつつ、必要なデータを抽出
失敗　ー＞　エラーとしてログを吐き出す（リトライはしない。）
レスポンスの形式：
### 6整理された結果をDBに格納
受け取った結果を整理してcsvに格納
csvの扱い：ライブラリor自分でparse

# schedule
2021.5 GW
5/1 design doc作成
5/2 gRPC使い方確認 Vision API
5/3 Vision API  サーバー立てる
5/4 react hooks 使い方確認
5/5 アップロード

