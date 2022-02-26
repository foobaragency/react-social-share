import React, { FC } from 'react';
import { useShare, ShareGroupKey } from '../hooks/useShare';

interface IShareButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    domain: ShareGroupKey;
    url: string;
    subject?: string;
}

export const ShareButton: FC<IShareButtonProps> = (props) => {
    const { children, domain, url, subject, style } = props;
    const { target } = useShare();
    const _style = { border: 'none', margin: '0px', padding: '0px', ...style };

    return (
        <button {...props} style={_style} onClick={() => target(domain, url, subject)}>
            {children}
        </button>
    );
};

export const Print: FC<IShareButtonProps> = (props) => {
    return (
        <ShareButton {...props} domain="print" url="nothing">
            {props.children}
        </ShareButton>
    );
};

export const Email: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href, subject } = props;

    return (
        <ShareButton {...props} domain="email" url={url} subject={subject}>
            {children}
        </ShareButton>
    );
};

export const Whatsapp: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="whatsapp" url={url}>
            {children}
        </ShareButton>
    );
};

export const Twitter: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="twitter" url={url}>
            {children}
        </ShareButton>
    );
};

export const Facebook: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="facebook" url={url}>
            {children}
        </ShareButton>
    );
};

export const Pinterest: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="pinterest" url={url}>
            {children}
        </ShareButton>
    );
};

export const Linkedin: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="linkedin" url={url}>
            {children}
        </ShareButton>
    );
};

export const Telegram: FC<IShareButtonProps> = (props) => {
    const { children, url = window.location.href } = props;

    return (
        <ShareButton {...props} domain="telegram" url={url}>
            {children}
        </ShareButton>
    );
};
