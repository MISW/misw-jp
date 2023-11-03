# misw-jp

[MIS.W 公式サイト](https://misw.jp/)

## 開発の手順
### セットアップ
パッケージ管理にCorepackとpnpmを使用しています。

```sh
# pnpmのインストール
sudo corepack enable
sudo corepack prepare pnpm@latest --activate

# (オプション) npm経由でpnpmをインストールしてもよい
sudo npm i -g pnpm

pnpm i --frozen-lockfile
```

### ビルド方法
`./dist`ディレクトリにビルド成果物が出力されます。

```sh
pnpm build
mv -v _headers dist/
mv -v _redirects dist/
```

## ページの公開について
Cloudflare Pagesでホスティングしています。
