import { describe, it, expect } from 'vitest'
import { skills, socialLinks, certificates, projects } from '../constants/index.js'

describe('Feature: Constants Data Integrity', () => {

  // Case 20
  it('Scenario: skills array should contain exactly 6 valid entries', () => {
    // Given the About page displays skills
    // When checking the skills data
    // Then there should be 6 skills
    expect(skills).toHaveLength(6)

    // And each skill should have required properties
    for (const skill of skills) {
      expect(skill).toHaveProperty('imageUrl')
      expect(skill).toHaveProperty('name')
      expect(skill).toHaveProperty('type')
      expect(skill.name).toBeTruthy()
      expect(skill.type).toBeTruthy()
    }
  })

  // Case 21
  it('Scenario: skills should include core data engineering technologies', () => {
    // Given the user is a data engineer
    // When checking skill names
    const skillNames = skills.map(s => s.name.toUpperCase())

    // Then Python, SQL, Oracle, PostgreSQL should be present
    expect(skillNames).toContain('PYTHON')
    expect(skillNames).toContain('SQL')
    expect(skillNames).toContain('ORACLE')
    expect(skillNames).toContain('POSTGRESQL')
  })

  // Case 22
  it('Scenario: projects array should contain exactly 4 entries with valid links', () => {
    // Given the Projects page displays portfolio projects
    // When checking the projects data
    // Then there should be 4 projects
    expect(projects).toHaveLength(4)

    // And each project should have required properties
    for (const project of projects) {
      expect(project).toHaveProperty('iconUrl')
      expect(project).toHaveProperty('theme')
      expect(project).toHaveProperty('name')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('link')
      expect(project.link).toMatch(/^https?:\/\//)
    }
  })

  // Case 23
  it('Scenario: projects should not contain template placeholder data', () => {
    // Given template projects were removed as dead code
    // When checking project names
    const projectNames = projects.map(p => p.name)

    // Then template projects should not be present
    expect(projectNames).not.toContain('Full Stack Instagram Clone')
    expect(projectNames).not.toContain('Real-Estate Application')
    expect(projectNames).not.toContain('AI Summarizer Application')
  })

  // Case 24
  it('Scenario: certificates array should have valid entries', () => {
    // Given the Projects page also shows certificates
    // When checking certificates data
    // Then there should be at least 1 certificate
    expect(certificates.length).toBeGreaterThan(0)

    // And each certificate should have required properties
    for (const cert of certificates) {
      expect(cert).toHaveProperty('iconUrl')
      expect(cert).toHaveProperty('theme')
      expect(cert).toHaveProperty('name')
      expect(cert).toHaveProperty('link')
      expect(cert.name).toBeTruthy()
      expect(cert.link).toMatch(/^https?:\/\//)
    }
  })

  // Case 25
  it('Scenario: certificates should not contain duplicate entries', () => {
    // Given duplicate certificates were cleaned from dead code
    // When checking for duplicates
    const certNames = certificates.map(c => c.name)
    const uniqueNames = [...new Set(certNames)]

    // Then there should be no duplicates
    expect(certNames).toHaveLength(uniqueNames.length)
  })

  // Case 26
  it('Scenario: socialLinks should have 3 valid entries', () => {
    // Given the project has social link data
    // When checking socialLinks
    // Then there should be 3 links
    expect(socialLinks).toHaveLength(3)

    // And each should have name, iconUrl, and link
    for (const link of socialLinks) {
      expect(link).toHaveProperty('name')
      expect(link).toHaveProperty('iconUrl')
      expect(link).toHaveProperty('link')
    }
  })

  // Case 27
  it('Scenario: constants should not contain any commented-out dead code blocks', () => {
    // Given dead code was removed from constants
    const fs = require('fs')
    const path = require('path')
    const content = fs.readFileSync(
      path.resolve(__dirname, '../constants/index.js'), 'utf-8'
    )

    // When checking for large commented-out blocks (3+ consecutive comment lines)
    const commentBlocks = content.match(/(\/\/.*\n){3,}/g)

    // Then there should be no large commented-out code blocks
    expect(commentBlocks).toBeNull()
  })
})
