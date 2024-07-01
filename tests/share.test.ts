import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';

import SocialShare from "../src/SocialShare.astro";
import FacebookShareButton from "../src/Facebook.astro";

test('Basic Share Bar', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialShare, {
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        }
    });
    expect(result).toContain('class="astro-social-share"');

    // Currently there's 6 buttons, splitting on this gives us 8 parts.
    expect(result.split('social-share-btn').length).toBe(8);
});

test('Custom Share Bar', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialShare, {
        props: {
            buttons: [FacebookShareButton],
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        }
    });
    expect(result).toContain('class="astro-social-share"');

    // We only pass in a single button, so we should only have 2 parts.
    expect(result.split('social-share-btn').length).toBe(2);
});