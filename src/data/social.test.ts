import { describe, it, expect } from 'vitest';
import { socialLinks } from './social';

describe('socialLinks', () => {
  it('should have at least one link', () => {
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('each link should have label, url, and icon', () => {
    for (const link of socialLinks) {
      expect(link.label).toBeTruthy();
      expect(link.url).toBeTruthy();
      expect(link.icon).toBeTruthy();
    }
  });

  it('should contain GitHub and LinkedIn', () => {
    const labels = socialLinks.map((l) => l.label);
    expect(labels).toContain('GitHub');
    expect(labels).toContain('LinkedIn');
  });
});
