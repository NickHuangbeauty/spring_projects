import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const rootDir = path.resolve(__dirname, '../../')
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'))
const packageLock = JSON.parse(fs.readFileSync(path.join(rootDir, 'package-lock.json'), 'utf-8'))
const gitignore = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf-8')

describe('Feature: Security Vulnerability Patches', () => {

  // Case 1
  it('Scenario: minimatch 3.x should be patched to fix CVE-2026-27903 ReDoS', () => {
    // Given the project has an overrides section in package.json
    const overrides = packageJson.overrides
    expect(overrides).toBeDefined()

    // When checking the minimatch 3.x override
    const minimatch3Override = overrides['minimatch@>=3.0.0 <4.0.0']

    // Then the override version should be at least 3.1.4
    expect(minimatch3Override).toBeDefined()
    const version = minimatch3Override.split('.').map(Number)
    expect(version[0]).toBe(3)
    expect(version[1] * 100 + version[2]).toBeGreaterThanOrEqual(104)
  })

  // Case 2
  it('Scenario: minimatch 9.x should be patched to fix CVE-2026-27903 ReDoS', () => {
    // Given the project has overrides
    const overrides = packageJson.overrides

    // When checking the minimatch 9.x override
    const minimatch9Override = overrides['minimatch@>=9.0.0 <10.0.0']

    // Then the override version should be at least 9.0.7
    expect(minimatch9Override).toBeDefined()
    const version = minimatch9Override.split('.').map(Number)
    expect(version[0]).toBe(9)
    expect(version[1] * 100 + version[2]).toBeGreaterThanOrEqual(7)
  })

  // Case 3
  it('Scenario: braces should be patched to fix CVE-2024-4068 DoS', () => {
    // Given the project has overrides
    const overrides = packageJson.overrides

    // When checking the braces override
    const bracesOverride = overrides['braces']

    // Then the override version should be at least 3.0.3
    expect(bracesOverride).toBeDefined()
    const version = bracesOverride.split('.').map(Number)
    expect(version[0] * 10000 + version[1] * 100 + version[2]).toBeGreaterThanOrEqual(30003)
  })

  // Case 4
  it('Scenario: vite should be upgraded to v8+ to eliminate esbuild vulnerability', () => {
    // Given the project uses vite as a dev dependency
    const viteVersion = packageJson.devDependencies['vite']

    // When parsing the major version
    const major = parseInt(viteVersion.replace(/^\^|~/, '').split('.')[0])

    // Then vite major version should be 8 or higher
    expect(major).toBeGreaterThanOrEqual(8)
  })

  // Case 5
  it('Scenario: @vitejs/plugin-react should be compatible with vite 8', () => {
    // Given the project uses @vitejs/plugin-react
    const pluginVersion = packageJson.devDependencies['@vitejs/plugin-react']

    // When parsing the major version
    const major = parseInt(pluginVersion.replace(/^\^|~/, '').split('.')[0])

    // Then plugin-react should be v6+ for vite 8 compatibility
    expect(major).toBeGreaterThanOrEqual(6)
  })

  // Case 6
  it('Scenario: installed minimatch should not be a vulnerable version', () => {
    // Given the package-lock.json contains resolved dependency versions
    const packages = packageLock.packages || {}

    // When checking all minimatch installations
    for (const [key, val] of Object.entries(packages)) {
      if (key.endsWith('/minimatch') || key === 'node_modules/minimatch') {
        const version = val.version.split('.').map(Number)

        // Then no minimatch 3.x below 3.1.4 should be installed
        if (version[0] === 3) {
          expect(version[1] * 100 + version[2]).toBeGreaterThanOrEqual(104)
        }
        // And no minimatch 9.x below 9.0.7 should be installed
        if (version[0] === 9) {
          expect(version[1] * 100 + version[2]).toBeGreaterThanOrEqual(7)
        }
      }
    }
  })

  // Case 7
  it('Scenario: installed braces should not be a vulnerable version', () => {
    // Given the package-lock.json contains resolved versions
    const packages = packageLock.packages || {}

    // When checking braces installation
    for (const [key, val] of Object.entries(packages)) {
      if (key.endsWith('/braces') || key === 'node_modules/braces') {
        const version = val.version.split('.').map(Number)

        // Then braces should be at least 3.0.3
        expect(version[0] * 10000 + version[1] * 100 + version[2]).toBeGreaterThanOrEqual(30003)
      }
    }
  })

  // Case 8
  it('Scenario: vite 8 should use rolldown instead of vulnerable esbuild', () => {
    // Given vite 8 replaces esbuild with rolldown
    const packages = packageLock.packages || {}

    // When checking for esbuild in direct dependencies
    const hasEsbuildDirect = 'node_modules/esbuild' in packages
      && packages['node_modules/esbuild'].version
      && parseInt(packages['node_modules/esbuild'].version.split('.')[0]) <= 0
      && parseInt(packages['node_modules/esbuild'].version.split('.')[1]) <= 24

    // Then vulnerable esbuild (<= 0.24.2) should not be present
    expect(hasEsbuildDirect).toBe(false)
  })
})

describe('Feature: .gitignore Security Configuration', () => {

  // Case 9
  it('Scenario: .gitignore should prevent committing environment secrets', () => {
    // Given the project has a .gitignore file
    expect(gitignore).toBeDefined()

    // When checking for .env exclusion rules
    // Then .env and .env.* should be excluded
    expect(gitignore).toMatch(/^\.env$/m)
    expect(gitignore).toMatch(/^\.env\.\*$/m)
  })

  // Case 10
  it('Scenario: .gitignore should exclude node_modules', () => {
    // Given the project has a .gitignore
    // When checking for node_modules rule
    // Then node_modules should be excluded
    expect(gitignore).toMatch(/^node_modules$/m)
  })

  // Case 11
  it('Scenario: .gitignore should exclude OS metadata files', () => {
    // Given the project has a .gitignore
    // When checking for OS file rules
    // Then .DS_Store and Thumbs.db should be excluded
    expect(gitignore).toMatch(/\.DS_Store/m)
    expect(gitignore).toMatch(/Thumbs\.db/m)
  })

  // Case 12
  it('Scenario: .gitignore should exclude IDE configuration directories', () => {
    // Given the project has a .gitignore
    // When checking for IDE config rules
    // Then .idea and .vscode should be excluded
    expect(gitignore).toMatch(/\.idea/m)
    expect(gitignore).toMatch(/\.vscode/m)
  })
})
