# shoheiymmt

Astroで作ったシンプルなブログです。

## 開発

```bash
npm install
npm run dev
```

記事は `src/content/posts/` にMarkdownで追加します。

## GitHub Pages

`main` ブランチへpushすると、GitHub Actionsが `dist/` をGitHub Pagesへ公開します。

GitHubリポジトリの Settings > Pages > Build and deployment で、Sourceに `GitHub Actions` を選択してください。