const Eleventy = require('@11ty/eleventy')

const { configFunction } = require('../lib')
// const { configFunction } = require('../src/index.cjs')

describe('configFunction', () => {
  it('throws when no required config is passed', async () => {
    // it this seems we can instantiate Eleventy with these parameters
    const input = undefined
    const output = undefined
    const options = {}
    const eleventy = new Eleventy(input, output, options)

    const eleventyConfig = eleventy.eleventyConfig.userConfig
    // monkey-patch `eleventyConfig` because in this test `dir` is undefined.
    // In a real scenario, we expect `dir` to be defined.
    eleventyConfig.dir = {
      output: '_site'
    }

    const pluginOptions = {
      verbose: true
    }

    expect(() => {
      configFunction(eleventyConfig, pluginOptions)
    }).not.toThrow()
  })
})
