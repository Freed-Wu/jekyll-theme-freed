# jekyll-theme-freed

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/Freed-Wu/jekyll-theme-freed/main.svg)](https://results.pre-commit.ci/latest/github/Freed-Wu/jekyll-theme-freed/main)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/Freed-Wu/Freed-Wu.github.io/main.svg)](https://results.pre-commit.ci/latest/github/Freed-Wu/Freed-Wu.github.io/main)
[![github/workflow](https://github.com/Freed-Wu/Freed-Wu.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/Freed-Wu/Freed-Wu.github.io/actions)

[![github/downloads](https://shields.io/github/downloads/Freed-Wu/jekyll-theme-freed/total)](https://github.com/Freed-Wu/jekyll-theme-freed/releases)
[![github/downloads/latest](https://shields.io/github/downloads/Freed-Wu/jekyll-theme-freed/latest/total)](https://github.com/Freed-Wu/jekyll-theme-freed/releases/latest)
[![github/issues](https://shields.io/github/issues/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/issues)
[![github/issues-closed](https://shields.io/github/issues-closed/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/issues?q=is%3Aissue+is%3Aclosed)
[![github/issues-pr](https://shields.io/github/issues-pr/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/pulls)
[![github/issues-pr-closed](https://shields.io/github/issues-pr-closed/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/pulls?q=is%3Apr+is%3Aclosed)
[![github/discussions](https://shields.io/github/discussions/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/discussions)
[![github/milestones](https://shields.io/github/milestones/all/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/milestones)
[![github/forks](https://shields.io/github/forks/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/network/members)
[![github/stars](https://shields.io/github/stars/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/stargazers)
[![github/watchers](https://shields.io/github/watchers/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/watchers)
[![github/contributors](https://shields.io/github/contributors/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/graphs/contributors)
[![github/commit-activity](https://shields.io/github/commit-activity/w/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/graphs/commit-activity)
[![github/last-commit](https://shields.io/github/last-commit/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/commits)
[![github/release-date](https://shields.io/github/release-date/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/releases/latest)

[![github/license](https://shields.io/github/license/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed/blob/main/LICENSE)
[![github/languages](https://shields.io/github/languages/count/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)
[![github/languages/top](https://shields.io/github/languages/top/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)
[![github/directory-file-count](https://shields.io/github/directory-file-count/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)
[![github/code-size](https://shields.io/github/languages/code-size/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)
[![github/repo-size](https://shields.io/github/repo-size/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)
[![github/v](https://shields.io/github/v/release/Freed-Wu/jekyll-theme-freed)](https://github.com/Freed-Wu/jekyll-theme-freed)

A guide to build a blog like [mine](https://freed-wu.github.io).

Change the following `Freed-Wu` to your github username.

## Build in Github

### Create a Repo

[Use this template](https://github.com/Freed-Wu/Freed-Wu.github.io/generate) to
create a repo named `Freed-Wu.github.io`.

### Create a Token

If you install [`github-cli`](https://github.com/cli/cli):

```shell
$ gh auth login  # login github, `~/.git-credentials` will be created after login
$ cat ~/.git-credentials
https://Freed-Wu:gho_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX@github.com
```

Or you can use [`github web UI`](https://github.com/settings/tokens/) to create
a token refer to
<https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token>.

### Create a Secret for Your Repo according to Your Token

Go to
<https://github.com/Freed-Wu/Freed-Wu.github.io/settings/secrets/actions>
to create a secret named `GH_TOKEN` like
`gho_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` refer to
<https://docs.github.com/en/actions/security-guides/encrypted-secrets>.

### Create a New Post

```shell
git clone https://github.com/Freed-Wu/Freed-Wu.github.io
cd Freed-Wu.github.io
vi _config.yaml  # use your information to replace mime
vi README.md  # create your homepage
rm _post/*  # delete my posts
vi _post/YYYY-MM-DD-title.md  # create your post
git add -A
git commit
git push
```

Deploy github pages from branch `gh-pages`'s `/` refer to
<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch>.
An incorrect branch will bring you
[some bug](https://github.com/jekyll/jekyll/discussions/9341).

Now wait
<https://github.com/Freed-Wu/Freed-Wu.github.io/actions/workflows/pages/pages-build-deployment>
finished. Open <https://Freed-Wu.github.io> to see your blog:

```shell
xdg-open https://Freed-Wu.github.io
```

## After Building in Github, Open in Localhost

```shell
git clone --branch=gh-pages https://github.com/Freed-Wu/Freed-Wu.github.io _site
python -m http.server -d _site
```

Open <http://localhost:8000> to see your blog:

```shell
xdg-open http://localhost:8000
```

## Build in Localhost

```shell
git clone --recurse-submodules --depth=1 https://github.com/Freed-Wu/Freed-Wu.github.io
cd Freed-Wu.github.io
```

### Install Dependencies

#### [`AUR`](https://aur.archlinux.org)

```shell
./install.sh
```

#### [`nix`](https://search.nixos.org/packages)

```shell
nix-shell --command 'jekyll s'
```

#### [`rubygems`](https://rubygems.org/)

```shell
bundle install
bundle exec jekyll s
```

<https://localhost:4000> will be opened automatically to display your blog.
