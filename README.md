# Deploy to Gist

[![CI](https://github.com/nmstreethran/actions-deploy-gist/actions/workflows/ci.yml/badge.svg)](https://github.com/nmstreethran/actions-deploy-gist/actions/workflows/ci.yml)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

This is a GitHub Action to deploy file to GitHub Gist.

## Quick start

```yml
- uses: actions/checkout@v5
- name: Deploy
  uses: nmstreethran/actions-deploy-gist@main
  with:
    token: ${{ secrets.TOKEN }}
    gist_id: from_gist_url
    file_path: build/book.pdf
    file_type: binary
```

## Setup

### Prep work

1. Create a gist (public or secret) if you don't have one.
1. Generate a new [personal access token](https://github.com/settings/tokens/). Only the `gist` scope is needed.

### Project setup

1. Go to the repo **Settings > Secrets**. Add the generated token with name `TOKEN`.
1. Edit workflow file `.github/workflows/deploy.yml` as the example above.

### Options

#### `token`

Personal access token for updating Gist.

#### `gist_id`

ID portion from the Gist URL, e.g. `https://gist.github.com/nmstreethran/`**`c53238c34fb3325526790acbbb6b3a98`**.

#### `gist_description` (optional)

Description of the gist.

#### `gist_file_name` (optional)

Name of the file to be added in the Gist. If not provided, the original file name from `file_path` will be used.

#### `file_path`

Relative to the current repo's root directory, e.g. `dist/foo.bar`.

#### `file_type` (optional)

Default to `text`. It should be set to `binary` if the file is an image, PDF, etc.

## License

[MIT License](https://github.com/exuanbo/actions-deploy-gist/blob/main/LICENSE)
