# background

普段その場の値段で買い物をしているので、時期や店舗による違いをみたい

OCRはレシートくらいなら一通り開拓された分野のはずで、開発練習のいいネタ

# objective

撮影したレシートをOCRした結果をCSV形式に落とし込み、同種の買い物の価格を比較する。


# what it does

大手が提供するAPIに画像を投げて、結果を取得し、parseする


# what it does NOT

データ分析基盤の提供
OCRモデルの開発

# environment

web
localhost

# overview

撮影した画像をアップロード→結果をDBに格納
DBには別の方法でアクセス

## 記述選定
### 試したいこと
* 自動テスト
* React Hooks

# detail


# schedule
1 design doc作成
2
3
4
5 終了

