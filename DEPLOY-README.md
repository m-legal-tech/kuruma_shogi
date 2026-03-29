# くるま将棋 - GitHub Pagesデプロイ手順

## 📦 パッケージ内容

このパッケージには以下のファイルが含まれています：

```
kuruma-shogi-github-pages.tar.gz
├── kuruma-shogi.html          - メインHTMLファイル
├── favicon.ico                - ブラウザタブ用アイコン
└── public/
    ├── icon-192.png           - PWAアイコン 192×192
    ├── icon-512.png           - PWAアイコン 512×512
    ├── apple-touch-icon.png   - iOS用アイコン 180×180
    ├── pwa-icon-original.png  - 元画像
    ├── manifest.json          - PWAマニフェスト
    ├── sw.js                  - Service Worker
    └── (車両PNG画像 5種類)
```

## 🚀 GitHub Pagesへのデプロイ手順

### 方法1: GitHub Web UIを使用

1. **GitHubで新しいリポジトリを作成**
   - リポジトリ名: `kuruma-shogi` (任意)
   - Public/Private: Public推奨
   - README: 追加しない

2. **パッケージを解凍**
   ```bash
   tar -xzf kuruma-shogi-github-pages.tar.gz
   ```

3. **ファイルをアップロード**
   - GitHubリポジトリページで「Add file」→「Upload files」
   - すべてのファイルをドラッグ&ドロップ
   - 「Commit changes」

4. **GitHub Pagesを有効化**
   - リポジトリの「Settings」→「Pages」
   - Source: 「Deploy from a branch」
   - Branch: 「main」, Folder: 「/ (root)」
   - 「Save」をクリック

5. **アクセス**
   - 数分後、`https://USERNAME.github.io/kuruma-shogi/kuruma-shogi.html` でアクセス可能

### 方法2: Gitコマンドラインを使用

```bash
# パッケージを解凍
tar -xzf kuruma-shogi-github-pages.tar.gz

# Gitリポジトリを初期化
git init
git add .
git commit -m "Initial commit: くるま将棋 PWA"

# GitHubリポジトリに接続（リポジトリを先に作成）
git remote add origin https://github.com/USERNAME/kuruma-shogi.git
git branch -M main
git push -u origin main

# GitHub Pagesを有効化（Web UIから設定）
```

### 方法3: GitHub CLIを使用

```bash
# パッケージを解凍
tar -xzf kuruma-shogi-github-pages.tar.gz

# リポジトリ作成とプッシュ
gh repo create kuruma-shogi --public --source=. --remote=origin --push

# GitHub Pagesを有効化
gh api repos/USERNAME/kuruma-shogi/pages \
  -X POST \
  -f source[branch]=main \
  -f source[path]=/
```

## 📱 PWA機能

デプロイ後、以下の機能が利用可能になります：

- ✅ **ホーム画面に追加** - 消防車アイコンでアプリ化
- ✅ **オフライン動作** - Service Workerによるキャッシュ
- ✅ **高速起動** - ネイティブアプリのような体験
- ✅ **全画面表示** - ブラウザUIなしの没入体験

## 🔧 カスタマイズ

### サイト名の変更
`manifest.json`の`name`と`short_name`を編集：
```json
{
  "name": "あなたのサイト名",
  "short_name": "短縮名"
}
```

### テーマカラーの変更
`manifest.json`と`kuruma-shogi.html`の`theme_color`を編集：
```json
{
  "theme_color": "#667eea"
}
```

## 📝 注意事項

- GitHub Pagesは静的サイトホスティングサービスです
- HTTPS自動適用でPWA完全対応
- カスタムドメイン設定も可能
- Service Workerは初回アクセス後に有効化されます

## 🌐 公開URL

デプロイ後のURL形式：
```
https://USERNAME.github.io/REPOSITORY/kuruma-shogi.html
```

例：
```
https://yourusername.github.io/kuruma-shogi/kuruma-shogi.html
```

## 📞 サポート

問題がある場合は、以下を確認してください：
- GitHubリポジトリが正しく設定されているか
- ファイル構造が保持されているか（特に`public/`ディレクトリ）
- GitHub Pagesが有効化されているか
- ブラウザキャッシュをクリアしたか

---

**作成日**: 2026年3月29日
**バージョン**: 1.0
