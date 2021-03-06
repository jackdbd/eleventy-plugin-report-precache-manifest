# eleventy-plugin-report-precache-manifest

[![npm version](https://badge.fury.io/js/@jackdbd%2Feleventy-plugin-report-precache-manifest.svg)](https://badge.fury.io/js/@jackdbd%2Feleventy-plugin-report-precache-manifest)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@jackdbd%2Feleventy-plugin-report-precache-manifest)
![ci workflow](https://github.com/jackdbd/eleventy-plugin-report-precache-manifest/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/jackdbd/eleventy-plugin-report-precache-manifest/branch/main/graph/badge.svg?token=XjuB9ZdY5m)](https://codecov.io/gh/jackdbd/eleventy-plugin-report-precache-manifest) [![CodeFactor](https://www.codefactor.io/repository/github/jackdbd/eleventy-plugin-report-precache-manifest/badge)](https://www.codefactor.io/repository/github/jackdbd/eleventy-plugin-report-precache-manifest)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jackdbd_eleventy-plugin-report-precache-manifest&metric=alert_status)](https://sonarcloud.io/dashboard?id=jackdbd_eleventy-plugin-report-precache-manifest)

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

This library is an [Eleventy plugin](https://www.11ty.dev/docs/plugins/) that will let you inspect the precache manifest of your service worker. The service worker must be in your [Eleventy output directory](https://www.11ty.dev/docs/config/#output-directory), and must have been generated by [Workbox](https://developer.chrome.com/docs/workbox/), for example by the `generateSW` method of the [workbox-build](https://developer.chrome.com/docs/workbox/reference/workbox-build/) package.

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