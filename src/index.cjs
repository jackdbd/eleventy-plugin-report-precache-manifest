const Joi = require('joi')
const { reportPrecacheManifest } = require('./lib.cjs')

const makeEleventyAfterEventHandler = (eleventyConfig, pluginConfig) => {
  const eleventyOutputDirectory = eleventyConfig.dir.output
  const { reportName, verbose } = pluginConfig

  // partial application, to obtain a niladic function
  return reportPrecacheManifest.bind(null, {
    eleventyOutputDirectory,
    reportName,
    verbose
  })
}

const optionsSchema = Joi.object().keys({
  reportName: Joi.string().min(7).max(32),
  verbose: Joi.boolean()
})

const defaultOptions = {
  reportName: 'report-precache-manifest.json',
  verbose: false
}

const configFunction = (eleventyConfig, providedOptions) => {
  // validate user-provided options
  Joi.assert(providedOptions, optionsSchema)
  // validate default options, to catch bugs of this plugin
  Joi.assert(defaultOptions, optionsSchema)

  const pluginConfig = {}
  Object.assign(pluginConfig, defaultOptions, providedOptions)

  eleventyConfig.on(
    'eleventy.after',
    makeEleventyAfterEventHandler(eleventyConfig, pluginConfig)
  )
}

module.exports = { configFunction }
