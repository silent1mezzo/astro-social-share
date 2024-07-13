# Astro Social Share

Social media share buttons for your Astro site 

![npm](https://img.shields.io/npm/v/astro-social-share)

## Features
* ✅ Zero dependencies
* ✅ Fully customizable
* ✅ Share buttons for:
  * Facebook
  * Hacker News
  * LinkedIn
  * Reddit
  * Twitter
  * WhatsApp
* ✅ Small size
* ✅ Included icons from https://simpleicons.org/

## Demo
[Example](https://mckerlie.com/posts/improving-the-sharing-experience-in-astro)

## 📦 Installation

```bash
# Uisng NPM
npm install astro-social-share

# Using Yarn
yarn add astro-social-share

# Using PNPM
pnpm add astro-social-share
```

## 📖 Documentation

Please visit the [documentation](https://astro-social-share.mckerlie.com) for advanced usage.

## Usage

Simple, include all links

```astro
---
import { SocialShare } from "astro-social-share";
---

<SocialShare
    description="Description of the page/post"
    title="Page Title"
/>
```

If you'd like to customize the share bar you can import the individual buttons and pass them into the `<SocialShare />` component.

```astro
---
import { 
  FacebookShareButton,
  HackerNewsShareButton,
  LinkedInShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsAppShareButton,
  SocialShare
} from "astro-social-share";

const BUTTONS = [TwitterShareButton, FacebookShareButton]
---

<SocialShare
    buttons={BUTTONS}
    description="Description of the page/post"
    title="Page Title"
/>
```

## Using your own icons

If you'd like to pass in your own icons you can do so through the individual components.

```astro
---
import { 
  FacebookShareButton,
  TwitterShareButton,
} from "astro-social-share";

---

<FacebookShareButton>
  <svg>...</svg>
</FacebookShareButton>

<TwitterShareButton
    description="Description of the page/post"
    via="YourTwitterAccount"
    title="Page Title"
>
  <img ... />
</TwitterShareButton>
```

## Using your own CSS

If you'd like to style the share bar and icons you can pass in a global <style> component to a slot named `astro-social-share-css`

```astro
<SocialShare
    description="Description of the page/post"
    via="YourTwitterAccount"
    title="Page Title"
>
<slot name="astro-social-share-css">
  <style is:global>
    .astro-social-share {
        margin: 20px 0px;
        height: 24px;
    }
    .astro-social-share a {
        text-decoration: none;
        margin-right: 10px;
    }
    .astro-social-share svg {
        height: 24px;
    }
  </style>
</slot>
```

