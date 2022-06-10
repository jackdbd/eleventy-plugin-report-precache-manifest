# eleventy-plugin-report-precache-manifest

<!-- TODO: badges here -->

Generate a report about your [service worker precache manifest](https://developer.chrome.com/docs/workbox/modules/workbox-precaching/) after Eleventy has finished building your site.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details><summary>Table of Contents</summary>

- [What is this?](#what-is-this)
- [Why?](#why)
- [Installation](#installation)
  - [Options](#options)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

## What is this?

TODO

## Why?

TODO

## Installation

Install the plugin with your package manager of choice (npm, yarn, pnpm).

```sh
npm i -D @jackdbd/eleventy-plugin-report-precache-manifest
```

Add this plugin to your [Eleventy configuration file](https://www.11ty.dev/docs/config/) (tipically `.eleventy.js`):

```js
const reportPrecacheManifest = require('@jackdbd/eleventy-plugin-report-precache-manifest');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(reportPrecacheManifest);
};
```

### Options

| Option | Default | Explanation |
| --- | --- | --- |
| `reportName` | `report-precache-manifest.json` | basename of the generated report. You will find it in your [Eleventy output directory](https://www.11ty.dev/docs/config/#output-directory) (tipically `_site`). |
| `verbose` | `false` | Whether this plugin should output more information, or not. |