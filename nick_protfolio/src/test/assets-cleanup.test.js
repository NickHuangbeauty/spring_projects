import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'

const srcDir = path.resolve(__dirname, '..')
const rootDir = path.resolve(__dirname, '../../')

describe('Feature: Unused Asset Files Removed', () => {

  // Case 13
  it('Scenario: template example images should be removed', () => {
    // Given the project previously contained tutorial template images
    const removedFiles = [
      'src/assets/images/meta.png',
      'src/assets/images/shopify.png',
      'src/assets/images/starbucks.png',
      'src/assets/images/tesla.png',
      'src/assets/images/hero.jpg',
    ]

    // When checking the file system
    // Then none of the removed files should exist
    for (const file of removedFiles) {
      const fullPath = path.join(rootDir, file)
      expect(fs.existsSync(fullPath), `${file} should not exist`).toBe(false)
    }
  })

  // Case 14
  it('Scenario: unused template icon files should be removed', () => {
    // Given the project previously contained unused template icons
    const removedIcons = [
      'css.svg', 'express.svg', 'html.svg', 'javascript.svg',
      'mongodb.svg', 'motion.svg', 'mui.svg', 'nextjs.svg',
      'nodejs.svg', 'redux.svg', 'sass.svg', 'tailwindcss.svg',
      'typescript.svg', 'twitter.svg', 'estate.svg', 'pricewise.svg',
      'snapgram.svg', 'summiz.svg', 'threads.svg',
      'soundon.png', 'soundoff.png',
    ]

    // When checking the icons directory
    // Then none of the removed icons should exist
    for (const icon of removedIcons) {
      const fullPath = path.join(srcDir, 'assets/icons', icon)
      expect(fs.existsSync(fullPath), `icons/${icon} should not exist`).toBe(false)
    }
  })

  // Case 15
  it('Scenario: replaced static files should be removed', () => {
    // Given vite.svg was replaced by Interview.ico and duplicate favicon.ico existed
    const removedFiles = [
      path.join(rootDir, 'public/vite.svg'),
      path.join(srcDir, 'assets/favicon.ico'),
      path.join(srcDir, 'assets/react.svg'),
    ]

    // When checking the file system
    // Then the old files should not exist
    for (const file of removedFiles) {
      expect(fs.existsSync(file), `${file} should not exist`).toBe(false)
    }
  })

  // Case 16
  it('Scenario: favicon should be updated to Interview.ico', () => {
    // Given the favicon was changed from vite.svg to Interview.ico
    const icoPath = path.join(srcDir, 'assets/Interview.ico')

    // When checking the file system
    // Then Interview.ico should exist
    expect(fs.existsSync(icoPath)).toBe(true)

    // And index.html should reference it
    const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8')
    expect(indexHtml).toContain('Interview.ico')
    expect(indexHtml).not.toContain('vite.svg')
  })
})

describe('Feature: Export Files Cleaned Up', () => {

  // Case 17
  it('Scenario: icons/index.js should not export deleted icons', () => {
    // Given unused icons were removed
    const iconsIndex = fs.readFileSync(
      path.join(srcDir, 'assets/icons/index.js'), 'utf-8'
    )
    const deletedExports = [
      'css', 'express', 'html', 'javascript', 'mongodb',
      'motion', 'mui', 'nextjs', 'nodejs', 'redux', 'sass',
      'tailwindcss', 'typescript', 'twitter', 'estate',
      'pricewise', 'snapgram', 'summiz', 'threads',
      'soundon', 'soundoff',
    ]

    // When checking icons/index.js exports
    // Then deleted icon names should not be imported or exported
    for (const name of deletedExports) {
      expect(iconsIndex).not.toMatch(new RegExp(`import\\s+${name}\\s+from`))
    }
  })

  // Case 18
  it('Scenario: icons/index.js should still export active icons', () => {
    // Given the project actively uses certain icons
    const iconsIndex = fs.readFileSync(
      path.join(srcDir, 'assets/icons/index.js'), 'utf-8'
    )
    const activeExports = [
      'git', 'github', 'python', 'postgresql', 'oracle', 'sql',
      'contact', 'linkedin', 'ai', 'data', 'news',
      'coursera', 'udacity', 'aia', 'arrow',
    ]

    // When checking icons/index.js
    // Then all active icons should still be exported
    for (const name of activeExports) {
      expect(iconsIndex, `${name} should be exported`).toMatch(new RegExp(`\\b${name}\\b`))
    }
  })

  // Case 19
  it('Scenario: images/index.js should only export used images', () => {
    // Given unused images were removed
    const imagesIndex = fs.readFileSync(
      path.join(srcDir, 'assets/images/index.js'), 'utf-8'
    )

    // When checking images/index.js
    // Then it should export logo
    expect(imagesIndex).toContain('logo')

    // And it should NOT export removed images
    expect(imagesIndex).not.toContain('meta')
    expect(imagesIndex).not.toContain('shopify')
    expect(imagesIndex).not.toContain('starbucks')
    expect(imagesIndex).not.toContain('tesla')
    expect(imagesIndex).not.toContain('hero')
  })
})
