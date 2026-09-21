export type SocialPlatform = 'GitHub' | 'LinkedIn' | 'LeetCode' | 'HackerRank';

export interface SocialLink {
  platform: SocialPlatform;
  url: string; // e.g. '[ADD GITHUB URL]' until the real URL is added
}
