import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const rootDir = path.resolve(__dirname, '../../')

describe('Feature: Build Configuration Integrity', () => {

  // Case 28
  it('Scenario: vite.config.js should include GLB assets for 3D models', () => {
    // Given the project uses .glb 3D model files
    const viteConfig = fs.readFileSync(
      path.join(rootDir, 'vite.config.js'), 'utf-8'
    )

    // When checking the Vite configuration
    // Then assetsInclude should contain *.glb pattern
    expect(viteConfig).toContain('assetsInclude')
    expect(viteConfig).toContain('.glb')
  })

  // Case 29
  it('Scenario: index.html should reference correct favicon', () => {
    // Given the favicon was updated to Interview.ico
    const indexHtml = fs.readFileSync(
      path.join(rootDir, 'index.html'), 'utf-8'
    )

    // When checking the link tag
    // Then it should point to Interview.ico
    expect(indexHtml).toContain('Interview.ico')

    // And it should not reference old vite.svg
    expect(indexHtml).not.toContain('vite.svg')
  })

  // Case 30
  it('Scenario: project should build successfully with no missing assets', () => {
    // Given the project removed unused assets and updated exports
    // When checking that all referenced icon files exist
    const iconsDir = path.join(rootDir, 'src/assets/icons')
    const iconsIndex = fs.readFileSync(
      path.join(iconsDir, 'index.js'), 'utf-8'
    )

    // Then every imported file in icons/index.js should exist on disk
    const importMatches = iconsIndex.matchAll(/from\s+['"]\.\/([\w.-]+)['"]/g)
    for (const match of importMatches) {
      const filePath = path.join(iconsDir, match[1])
      expect(fs.existsSync(filePath), `${match[1]} should exist`).toBe(true)
    }

    // And every imported file in images/index.js should exist on disk
    const imagesDir = path.join(rootDir, 'src/assets/images')
    const imagesIndex = fs.readFileSync(
      path.join(imagesDir, 'index.js'), 'utf-8'
    )
    const imgMatches = imagesIndex.matchAll(/from\s+['"]\.\/([\w.-]+)['"]/g)
    for (const match of imgMatches) {
      const filePath = path.join(imagesDir, match[1])
      expect(fs.existsSync(filePath), `${match[1]} should exist`).toBe(true)
    }
  })
})
