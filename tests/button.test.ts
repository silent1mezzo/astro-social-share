import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import BlueskyShareButton from '../src/Bluesky.astro';
import EmailShareButton from "../src/Email.astro";
import FacebookShareButton from '../src/Facebook.astro';
import HackerNewsShareButton from '../src/HackerNews.astro';
import LinkedInShareButton from '../src/LinkedIn.astro';
import ThreadsShareButton from '../src/Threads.astro';
import TwitterShareButton from '../src/Twitter.astro';
import WhatsAppShareButton from '../src/Whatsapp.astro';    

const BUTTONS = [
    {
        obj: EmailShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'mailto:?subject=Example Subject&#38;body=Example Description%0Ahttps://example.com'
    },
    {
        obj: FacebookShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="https://www.facebook.com/sharer/sharer.php?u=https://example.com'
    
    },
    {
        obj: HackerNewsShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="http://news.ycombinator.com/submitlink?u=https://example.com&t=Example Subject"'
    },
    {
        obj: LinkedInShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="https://www.linkedin.com/sharing/share-offsite/?url=https://example.com"'
    },
    {
        obj: ThreadsShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="https://threads.net/intent/post?url=https://example.com&text=Example Description"'
    },
    {
        obj: TwitterShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="https://x.com/intent/tweet?url=https://example.com&text=Example Description"'
    },
    {
        obj: WhatsAppShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="whatsapp://send?text=Example%20Description%20https://example.com"'
    },
    {
        obj: BlueskyShareButton,
        props: {
            url: 'https://example.com',
            title: 'Example Subject',
            description: 'Example Description'
        },
        expected: 'href="https://bsky.app/intent/compose?text=Example%20Subjecthttps%3A%2F%2Fexample.com"'
    }
]

test('Basic Buttons', async () => {
    const container = await AstroContainer.create();

    for (const element of BUTTONS) {
        const result = await container.renderToString(element.obj, {
            props: element.props
        });
        expect(result).toContain('social-share-btn');
        expect(result).toContain(element.expected); 
    };
});

test('Custom SVG Icons', async () => {
    const container = await AstroContainer.create();

    for (const element of BUTTONS) {
        const result = await container.renderToString(element.obj, {
            props: element.props,
            slots: {
                default: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"/></svg>'
            }
        });
        expect(result).toContain('M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z');
    };
});