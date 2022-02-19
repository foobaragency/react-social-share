import { shareGroup } from '../utils/setup';

export type shareGroupKey = keyof typeof shareGroup;

function openTarget(url: string) {
    return typeof window !== 'undefined' && window.open(encodeURI(url));
}

function printPage() {
    return () => window.print();
}

function sendEmail(currentLink: string, subject: string) {
    const base = shareGroup.email.url;
    const link = `${base}?subject=${subject}&body=${currentLink}`;

    return openTarget(link);
}

function shareLink(domain: shareGroupKey, currentLink: string) {
    const base = shareGroup[domain].url;
    const link = `${base}${currentLink}`;

    return openTarget(link);
}

export const useShare = () => {
    const target = (domain: shareGroupKey, currentLink: string, subject?: string) => {
        if (shareGroup[domain].shareType === 'print') {
            return printPage();
        }
        if (shareGroup[domain].shareType === 'email') {
            return sendEmail(currentLink, subject!);
        }

        return shareLink(domain, currentLink);
    };

    return { target };
};
