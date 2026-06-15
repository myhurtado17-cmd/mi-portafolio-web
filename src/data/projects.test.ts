import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects', () => {
  it('should have at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project should have required fields', () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(Array.isArray(project.tags)).toBe(true);
      expect(Array.isArray(project.links)).toBe(true);
    }
  });

  it('each tag should have a name', () => {
    for (const project of projects) {
      for (const tag of project.tags) {
        expect(tag.name).toBeTruthy();
      }
    }
  });

  it('no project should reference /public/ in image path', () => {
    for (const project of projects) {
      if (project.image) {
        expect(project.image).not.toContain('/public/');
      }
    }
  });
});
