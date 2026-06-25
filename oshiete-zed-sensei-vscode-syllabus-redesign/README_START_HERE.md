# 教えてゼド先生 スターターセット

これは「教えてゼド先生」をVS Codeで編集・拡張していくためのスターターです。

## 今回の重要方針

公開サイト上では、学ぶ人の目線を最優先にします。

そのため、読者に見えるHTMLでは以下のような文言を避けます。

- VS Code用
- 編集用
- スターター
- JSON管理
- 内部管理
- サンプル
- ダミー
- 未実装
- 制作メモ

これらはREADME、情報源、テンプレート、データファイル側に閉じ込めます。

## まず開くファイル

1. `index.html`  
   サイトのホームです。

2. `010_subjects/001_philosophy/000_syllabus.html`  
   哲学シラバスです。

3. `002_mini-lessons/index.html`  
   本日の小さな補講のアーカイブです。

4. `001_admin-log/2026/06.html`  
   2026年6月の日誌です。

5. `091_sources/oshiete_zed_sensei_reader_view_policy_2026-06-26.md`  
   公開サイト上の読者目線徹底ルールです。

## フォルダ構成

```txt
oshiete-zed-sensei-vscode-reader-first/
├─ index.html
├─ 001_admin-log/
│  ├─ index.html
│  └─ 2026/
│     ├─ index.html
│     └─ 06.html
├─ 002_mini-lessons/
│  └─ index.html
├─ 010_subjects/
│  ├─ index.html
│  ├─ 001_philosophy/
│  │  ├─ 000_syllabus.html
│  │  └─ 001_metaphysics/
│  └─ 002_math/
│     ├─ 000_syllabus.html
│     └─ 001_math1/
├─ 090_assets/
├─ 091_sources/
├─ 092_templates/
└─ 099_data/
```

## 編集ルール

- 教科は哲学を先頭にする。
- 各教科は `000_syllabus.html` から始める。
- 内部のファイル名は三桁番号で管理する。
- 公開表示では `第1章`、`第1講` のように自然な番号にする。
- ホームの更新情報は管理者日誌の要約にする。
- 管理者日誌は一日一更新までにして、その日の更新内容をまとめる。
- 小さな補講は保存し、タグから見返せるようにする。
- 吹き出しにはバストアップ画像、人物紹介や導入には立ち絵画像を使う。
