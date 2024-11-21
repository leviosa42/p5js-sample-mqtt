# p5js-sample-mqtt

MQTT を使って p5.js 上で通信を行うサンプルです。

![](/asset/image.png)

## 技術スタック

- MQTT
  - Desktop shiftr.io ... MQTT ブローカー
  - mqtt.js ... MQTT クライアント
- p5.js ... クリエイティブコーディング用ライブラリ
- LiveServer(VSCode 拡張機能) ... ローカルサーバー

## ディレクトリ構成

```
p5js-sample-mqtt
├── README.md
├── receiver
│   ├── index.html
│   └── sketch.js
└── sender
    ├── index.html
    └── sketch.js
```

## セットアップ

1. リポジトリをクローンしVSCodeで開きます。

```bash
git clone
code p5js-sample-mqtt
```

1. 右下の `Go Live` ボタンをクリックしてローカルサーバーを立ち上げます。このとき、ボタンの表示が `Port : ****` に変わるため、ポート番号をメモしておいてください。

> [!NOTE]
> もし LiveServer がインストールされていない場合は、VSCode の拡張機能からインストールしてください。

> [!NOTE]
> デフォルトのポート番号は `5500` です。

3. ブラウザで `http://localhost:ポート番号/sender` と `http://localhost:ポート番号/receiver` を開きます。


> [!NOTE]
> iPad等プライベートLAN内のデバイスで動作させる場合は、`http://PCのIPアドレス:ポート番号/sender` と `http://PCのIPアドレス:ポート番号/receiver` を開いてください。

## 使い方

`sender` 側での情報が `receiver` 側で表示されます。

送信している内容は以下の通りです。

- マウス座標
- `sender` 側の時刻[msec]
- マウスボタンを押しているかどうか

## ライセンス

MIT
