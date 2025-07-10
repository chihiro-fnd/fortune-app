# fortune-app

## 概要

「fortune-app」は、Vue3とTypeScriptの学習用に開発された、タロットカード占いと星座占いができるWebアプリです。
タロットカードの意味や、誕生日から星座を自動判定し、外部APIを利用して今日の運勢を取得できます。

2025/7/10：作成中のため未完成箇所があります。

## 主な機能

- **タロット占い**  
  「カードを引く」ボタンでランダムにタロットカードを1枚引き、正位置・逆位置とその意味を表示します。  
  22枚の大アルカナカードに対応しています。

- **星座占い**  
  生年月日を入力すると自動で星座を判定し、ボタンで外部API（JugemKey）から今日の運勢データを取得・表示します。

## 技術スタック

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)（状態管理）
- TypeScript
- ESLint, Prettier（コード整形・静的解析）

## セットアップ

```sh
npm install
```

### 開発サーバー起動

```sh
npm run dev
```

### 本番ビルド

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## 占いAPIについて

- 星座占いの運勢データ取得には [JugemKey API](http://jugemkey.jp/api/waf/api_free.php) 無料版を利用しています。
- 開発サーバーでは `vite.config.ts` のプロキシ設定により `/api` で始まるリクエストが `http://api.jugemkey.jp` に転送されます。
- APIキーは不要です。

## 注意事項

- 本アプリは学習・デモ用です。APIの仕様変更やサービス停止により、星座占いのデータ取得ができなくなる場合があります。