---
description: Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.
---

# CLI

Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.

Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:

```json title="package.json"
{
  // ...
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

## Docusaurus CLI commands {#docusaurus-cli-commands}

Below is a list of Docusaurus CLI commands and their usages:

### `docusaurus start [siteDir]` {#docusaurus-start-sitedir}

Builds and serves a preview of your site locally with [Webpack Dev Server](https://webpack.js.org/configuration/dev-server).

#### Options {#options}

| Name | Default | Description |
| --- | --- | --- |
| `--port` | `3000` | Specifies the port of the dev server. |
| `--host` | `localhost` | Specify a host to use. For example, if you want your server to be accessible externally, you can use `--host 0.0.0.0`. |
| `--hot-only` | `false` | Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information [here](https://webpack.js.org/configuration/dev-server/#devserverhotonly). |
| `--no-open` | `false` | Do not open the page automatically in the browser. |
| `--config` | `undefined` | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js` |
| `--poll [optionalIntervalMs]` | `false` | Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information [here](https://webpack.js.org/configuration/watch/#watchoptionspoll). |
| `--no-minify` | `false` | Build website without minimizing JS/CSS bundles. |

:::important

Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production.

:::

:::info Development over network

When forwarding port 3000 from a remote server or VM (e.g. GitHub Codespaces), you can run the dev server on `0.0.0.0` to make it listen on the local IP.

```bash npm2yarn
npm run start -- --host 0.0.0.0
```

:::

#### Enabling HTTPS {#enabling-https}

There are multiple ways to obtain a certificate. We will use [mkcert](https://github.com/FiloSottile/mkcert) as an example.

1. Run `mkcert localhost` to generate `localhost.pem` + `localhost-key.pem`

2. Run `mkcert -install` to install the cert in your trust store, and restart your browser

3. Start the app with Docusaurus HTTPS env variables:

```bash
HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start
```

4. Open `https://localhost:3000/`

### `docusaurus build [siteDir]` {#docusaurus-build-sitedir}

Compiles your site for production.

#### Options {#options-1}

| Name | Default | Description |
| --- | --- | --- |
| `--bundle-analyzer` | `false` | Analyze your bundle with the [webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer). |
| `--out-dir` | `build` | The full path for the new output directory, relative to the current workspace. |
| `--config` | `undefined` | Path to Docusaurus config file, default to `[siteDir]/docusaurus.config.js` |
| `--no-minify` | `false` | Build website without minimizing JS/CSS bundles. |

:::info

For advanced minification of CSS bundle, we use the [advanced cssnano preset](https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced) (along with additional several PostCSS plugins) and [level 2 optimization of clean-css](https://github.com/jakubpawlowicz/clean-css#level-2-optimizations). If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable `USE_SIMPLE_CSS_MINIFIER=true` to minify CSS with the [default cssnano preset](https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default). **Please [fill out an issue](https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md) if you experience CSS minification bugs.**

You can skip the HTML minification with the environment variable `SKIP_HTML_MINIFICATION=true`.

:::

