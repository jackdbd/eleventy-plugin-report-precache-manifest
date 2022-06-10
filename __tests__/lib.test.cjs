const { reportPrecacheManifest } = require('../src/lib.cjs')

describe('reportPrecacheManifest', () => {
  it('throws when no required config is passed [config]', async () => {
    expect(reportPrecacheManifest()).rejects.toThrow()
  })

  it('throws when missing a required config parameter [config] (empty)', async () => {
    expect(reportPrecacheManifest({})).rejects.toThrow()
  })

  it('throws when missing a required config parameter [config] (missing eleventyOutputDirectory)', async () => {
    expect(
      reportPrecacheManifest({
        eleventyOutputDirectory: undefined,
        reportName: 'my-report.json',
        verbose: false
      })
    ).rejects.toThrow()
  })

  it('throws when missing a required config parameter [config] (missing reportName)', async () => {
    expect(
      reportPrecacheManifest({
        eleventyOutputDirectory: '_site',
        reportName: undefined,
        verbose: false
      })
    ).rejects.toThrow()
  })

  it('throws when missing a required config parameter [config] (missing verbose)', async () => {
    expect(
      reportPrecacheManifest({
        eleventyOutputDirectory: '_site',
        reportName: 'my-report.json',
        verbose: undefined
      })
    ).rejects.toThrow()
  })
})
