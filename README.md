# Astro Social Share

Social media share buttons for your Astro site

## Features
* No dependencies or external scrips
* Share buttons for:
  * Facebook
  * Hacker News
  * LinkedIn
  * Reddit
  * Twitter
* Icons included from https://simpleicons.org/

## Demo
[Example](https://mckerlie.com/posts/migrating-your-blog-from-hugo-to-astro)

## Install

`npm i astro-social-share`

## Usage

Simple, include all links

```js
import { SocialShare } from "astro-social-share";

<SocialShare
    description="Description of the page/post"
    via="YourTwitterAccount"
    title="Page Title"
/>
```

If you'd like to customize the share bar you can import the invidual buttons and pass them into the `<SocialShare />` component.

```astro
---
import { 
  FacebookShareButton,
  HackerNewsShareButton,
  LinkedInShareButton,
  RedditShareButton,
  TwitterShareButton,
  SocialShare
} from "astro-social-share";

const BUTTONS = [TwitterShareButton, FacebookShareButton]
---

<SocialShare
    buttons={BUTTONS}
    description="Description of the page/post"
    via="YourTwitterAccount"
    title="Page Title"
/>
```
