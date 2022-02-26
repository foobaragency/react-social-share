import { shareGroup, extendShare } from '../utils/setup';

export type ShareGroupKey = keyof typeof shareGroup;
type ExtendShareKey = keyof typeof extendShare;

const openTarget = (url: string) => typeof window !== 'undefined' && window.open(encodeURI(url));

const printPage = () => window.print();

const sendEmail = (currentLink: string, subject: string) => {
    const base = shareGroup.email.url;
    const link = `${base}?subject=${subject}&body=${currentLink}`;

    return openTarget(link);
};

const shareLink = (domain: ShareGroupKey | ExtendShareKey, currentLink: string) => {
    const base = shareGroup[domain] === undefined ? extendShare[domain].url : shareGroup[domain].url;
    const link = `${base}${currentLink}`;

    return openTarget(link);
};

export const useShare = () => {
    const target = (domain: ShareGroupKey, currentLink: string, subject?: string) => {
        if ((shareGroup[domain] !== undefined && shareGroup[domain].shareType) === 'print') {
            return printPage();
        }
        if ((shareGroup[domain] !== undefined && shareGroup[domain].shareType) === 'email') {
            return sendEmail(currentLink, subject!);
        }

        return shareLink(domain, currentLink);
    };

    return { target };
};
