# Portfolio

---

## Publishing & Deployment

The portfolio is built with React (Create React App) and hosted on
GitHub Pages.

**Live website:** https://theabalia.github.io/

### Repository structure

| Repository | Purpose |
|---|---|
| [TheAbAlia/home](https://github.com/TheAbAlia/home) | Source code, development, and version history |
| [TheAbAlia/TheAbAlia.github.io](https://github.com/TheAbAlia/TheAbAlia.github.io) | Production build published at the root GitHub Pages URL |

The production website is published from the `master` branch of
`TheAbAlia.github.io`.

> **Important:** The existing `npm run deploy` command publishes to
> the `gh-pages` branch of the `home` repository. It does **not**
> update the main website at `https://theabalia.github.io/`.

### Local development

```bash
cd ~/projects/home
npm install
npm start
```

The development server normally runs at `http://localhost:3000`.

### Publish changes

First, commit and push the source code:

```bash
cd ~/projects/home

npm run build

git add src public package.json README.md
git commit -m "feat: update portfolio"
git push origin master
```

If there are no changes to commit, Git will report that the working
tree is clean. Review `git status` before staging other files.

Then deploy the compiled website:

```bash
cd ~/projects/home

# Build the production application.
npm run build

# Clone the publishing repository into a temporary directory.
DEPLOY_DIR=$(mktemp -d)
git clone https://github.com/TheAbAlia/TheAbAlia.github.io.git "$DEPLOY_DIR/site"

# Back up the current published website.
BACKUP_DIR="$HOME/portfolio-deployment-backups/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

tar -C "$DEPLOY_DIR/site" \
  --exclude=.git \
  -czf "$BACKUP_DIR/previous-site.tar.gz" .

# Replace the published site files.
find "$DEPLOY_DIR/site" -mindepth 1 -maxdepth 1 \
  ! -name .git \
  -exec rm -rf -- {} +

cp -a build/. "$DEPLOY_DIR/site/"
touch "$DEPLOY_DIR/site/.nojekyll"

# Commit and publish the production build.
cd "$DEPLOY_DIR/site"

git add -A

if ! git diff --cached --quiet; then
  git commit -m "deploy: update portfolio website"
  git push origin master
fi

# Remove the temporary clone.
cd ~/projects/home
rm -rf "$DEPLOY_DIR"

echo "Deployment submitted: https://theabalia.github.io/"
echo "Previous website backup: $BACKUP_DIR"
```

This deployment process replaces the published website files while
preserving the publishing repository's Git history. It also saves a
local backup of the previous site.

**Note:** If the publishing repository contains a custom `CNAME` file,
preserve it when replacing the files.

### Verify deployment

1. Open https://github.com/TheAbAlia/TheAbAlia.github.io/actions
   and confirm the GitHub Pages deployment completed successfully.
2. Visit https://theabalia.github.io/.
3. Hard-refresh the browser (`Ctrl + Shift + R`) if necessary.
4. Verify that the updated content and styles appear.

### Troubleshooting

**The old website is still visible**

- Confirm the production build was pushed to
  `TheAbAlia/TheAbAlia.github.io`, not only `TheAbAlia/home`.
- Check the GitHub Pages deployment status.
- Allow GitHub Pages a few minutes to update.
- Clear the browser cache or use a private browsing window.

**JavaScript or CSS files return 404**

Verify that `package.json` contains the correct root homepage:

```json
"homepage": "https://TheAbAlia.github.io"
```

Rebuild and redeploy after changing this setting.

**The build fails**

Run:

```bash
npm ci
npm run build
```

Fix build errors before publishing.

**The deployment succeeds but the design is incorrect**

Check that `src/App.js` renders the intended portfolio components
and that `src/index.js` imports `src/scss/custom.scss`.

### Rollback

The publishing repository retains its Git history. To restore a
previous deployment, identify the desired commit:

```bash
git clone https://github.com/TheAbAlia/TheAbAlia.github.io.git
cd TheAbAlia.github.io
git log --oneline
```

Restore the desired site's files in a new commit rather than
force-pushing or rewriting the publishing branch.
