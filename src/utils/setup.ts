const isMobile = typeof window.orientation !== 'undefined' || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

interface IShareGroupProps {
    [key: string]: { shareType: 'print' | 'email' | 'link'; url: string };
}

interface extendProps {
    [key: string]: { shareType: 'link'; url: string };
}

export const extendShare: extendProps = {};

export const shareGroup: IShareGroupProps = {
    print: {
        shareType: 'print',
        url: 'nothing',
    },
    email: {
        shareType: 'email',
        url: 'mailto:',
    },
    facebook: {
        shareType: 'link',
        url: 'http://www.facebook.com/share.php?u=',
    },
    twitter: {
        shareType: 'link',
        url: 'https://twitter.com/share?url=',
    },
    whatsapp: {
        shareType: 'link',
        url: `https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?text=`,
    },
    pinterest: {
        shareType: 'link',
        url: 'http://pinterest.com/pin/create/link/?url=',
    },
    linkedin: {
        shareType: 'link',
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    },
    telegram: {
        shareType: 'link',
        url: 'https://telegram.me/share/?url=',
    },
};
