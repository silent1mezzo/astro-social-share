# Astro Social Share

> Social media share buttons and share counts for Astro.

## Features
* No depdencies, external scrips
* Share buttons for:
  * Facebook
  * Hacker News
  * Reddit
  * Twitter
* Icons included

## Demo
[Demo site](https://mckerlie.com/posts/migrating-your-blog-from-hugo-to-astro)

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

You can also import individual buttons

```js
import { 
  FacebookShareButton,
  HackerNewsShareButton,
  RedditShareButton,
  TwitterShareButton
} from "astro-social-share";

<TwitterShareButton 
    description="Description of the page/post"
    via="YourTwitterAccount"
/>
<FacebookShareButton />
<HackerNewsShareButton title={title}/>
<RedditShareButton title={title} />
```