const { writeFile } = require('fs/promises')
const path = require('path')
const chalk = require('chalk')
const { getManifest } = require('workbox-build/build/get-manifest')

const PREFIX = '[🔎 report precache manifest] '

// it's called `config` and not `options` because ALL fields are REQUIRED
const reportPrecacheManifest = async (config) => {
  const { eleventyOutputDirectory, reportName, verbose } = config
  if (eleventyOutputDirectory === undefined) {
    throw new Error(`eleventyOutputDirectory is required`)
  }
  if (reportName === undefined) {
    throw new Error(`reportName is required`)
  }
  if (verbose === undefined) {
    throw new Error(`verbose is required`)
  }

  const entries = {
    css: [],
    fonts: [],
    html: [],
    images: [],
    js: [],
    other: []
  }

  // color functions, just to add a level of indirection, so I can change colors
  // in one place. This could also be useful if I decide to replace chalk.
  const cfCss = chalk.blue
  const cfJs = chalk.yellow
  const cfHtml = chalk.white
  const cfImages = chalk.green
  const cfFonts = chalk.red
  const cfOk = chalk.green
  const cfWarn = chalk.yellow
  const cfError = chalk.red
  // const cfCss = (x) => x
  // const cfJs = (x) => x
  // const cfHtml = (x) => x
  // const cfImages = (x) => x
  // const cfFonts = (x) => x
  // const cfOk = (x) => x
  // const cfWarn = (x) => x
  // const cfError = (x) => x

  try {
    // https://developer.chrome.com/docs/workbox/modules/workbox-build/#getmanifest-mode
    const { count, size, manifestEntries, warnings } = await getManifest({
      globDirectory: eleventyOutputDirectory,
      globPatterns: ['**/*.{css,html,js,woff,woff2}']
    })

    const kB = size / 1000
    console.log(
      `${PREFIX}your service worker will precache ${count} assets/pages, for a total of ${kB} kB`
    )

    manifestEntries.forEach((entry) => {
      const { url, revision } = entry

      switch (path.extname(url)) {
        case '.css': {
          entries.css.push({ url, revision })
          break
        }
        case '.html': {
          entries.html.push({ url, revision })
          break
        }
        case '.jpeg': {
          entries.images.push({ url, revision })
          break
        }
        case '.jpg': {
          entries.images.push({ url, revision })
          break
        }
        case '.js': {
          entries.js.push({ url, revision })
          break
        }
        case '.png': {
          entries.images.push({ url, revision })
          break
        }
        case '.woff': {
          entries.fonts.push({ url, revision })
          break
        }
        case '.woff2': {
          entries.fonts.push({ url, revision })
          break
        }
        default: {
          entries.other.push({ url, revision })
        }
      }
    })

    if (verbose) {
      console.log(cfCss(`${PREFIX}${entries.css.length} CSS`), entries.css)
      console.log(cfJs(`${PREFIX}${entries.js.length} JS`), entries.js)
      console.log(
        cfFonts(`${PREFIX}${entries.fonts.length} fonts`),
        entries.fonts
      )
      console.log(
        cfImages(`${PREFIX}${entries.images.length} images`),
        entries.images
      )
      console.log(cfHtml(`${PREFIX}${entries.html.length} HTML`), entries.html)
    } else {
      console.log(cfCss(`${PREFIX}${entries.css.length} CSS`))
      console.log(cfJs(`${PREFIX}${entries.js.length} JS`))
      console.log(cfFonts(`${PREFIX}${entries.fonts.length} fonts`))
      console.log(cfImages(`${PREFIX}${entries.images.length} images`))
      console.log(cfHtml(`${PREFIX}${entries.html.length} HTML`))
    }

    if (warnings.length > 0) {
      console.warn(`${PREFIX}⚠️${warnings.length} warnings`, warnings)
    }

    const filepath = path.join(eleventyOutputDirectory, reportName)
    try {
      await writeFile(filepath, JSON.stringify(entries, null, 4))
      console.log(cfOk(`${PREFIX}✅ wrote ${filepath}`))
    } catch (err) {
      console.warn(cfWarn(`${PREFIX}⚠️ could not write ${filepath}`))
    }
  } catch (err) {
    console.error(
      cfError(
        `${PREFIX}⚠️ could not retrieve precache manifest from ${eleventyOutputDirectory}`
      ),
      err
    )
  }
}

module.exports = { reportPrecacheManifest }
