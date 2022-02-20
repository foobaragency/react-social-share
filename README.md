# react-social-share

A simple but robust social media share module that facilitates sharing content on some the world's most popular social
networks.

## Demo

[Demo Incoming](https://).

## Features

This module includes components for sharing on share UI support for:

-   Facebook
-   WhatsApp
-   Twitter
-   LinkedIn
-   Pinterest
-   Telegram
-   Email
-   Print

The plan is to expand these components to accomodate other social media platforms. In the meantime, you can also extend
the components yourself through a simple API.

## Install

```js
npm install @foobaragency/react-social-share
```

or if you prefer yarn,

```js
yarn add  @foobaragency/react-social-share
```

## Usage

Simply import the component you want and wrap you text or icon with it. This gives you the ability to decide exactly how
your share component should appear at any time. You only need to pass in the `url` you want to share. In some rare
cases, you may want to style these base components. In such cases you can pass your styles as a `style` prop.

```js
import { Facebook, Twitter } from ' @foobaragency/react-social-share';

export const SocialMediaShare = () => {
    const url = 'www.the-url-you-want-to-share.com';

    return (
        <>
            <Facebook url={url}>
                <span className="up-to-you">Facebok</span>
            </Facebook>
            <Twitter url={url}>
                <span className="up-to-you">Facebok</span>
            </Twitter>
        </>
    );
};
```

## Extending Usage

If you need to share to a social media platform not already supported all you need is the `extendShare` object and the
`ShareButton` component. The `extendShare` accepts key of the name of the new platform, and points to an object that
contains `shareType` set to `link`, and `url` set to the new platform's share url.

The `ShareButton` component takes the usual `url` prop and an additional `domain` prop.

```js
import { extendShare, ShareButton } from ' @foobaragency/react-social-share';

extendShare.newplatform = {
    shareType: 'link',
    url: 'https://www.newplatform.com/sharing/?url=',
};

export const SocialMediaShare = () => {
    const url = 'www.the-url-you-want-to-share.com';

    return (
        <>
            <ShareButton domain="newplatform" url={url}>
                <span className="up-to-you">Facebok</span>
            </ShareButton>
        </>
    );
};
```

## Props

| Exports          |                                  Prop                                   |                                                                                               function |
| :--------------- | :---------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------: |
| Share components |                            `url`<br>`style?`                            |                                                             The URL to share <br>Optional style object |
| ShareButton      |                    `url` <br> `domain` <br> `style?`                    | The URL to share<br>New platform name. Corresponds with an `extendShare` key<br> Optional style object |
| ExtendShare      | .`${newplatfom}` <br> `${newplatfom}.shareType` <br>`${newplatfom}.url` |                This is the name of the new platform <br>Value always set to `link`<br>The URL to share |

## Custom Styles

This individual share components provides a style prop. This prop can be used to pass custom styles such as border radii
and box shadow.

```js
import { Facebook, Twitter } from ' @foobaragency/react-social-share';

const style = {
    borderRadius: '4px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export const SocialMediaShare = () => {
    const url = 'www.the-url-you-want-to-share.com';

    return (
        <Facebook url={url} style={style}>
            <span className="up-to-you">Facebok</span>
        </Facebook>
    );
};
```

## License

MIT
