import React, { FC } from 'react';
import { useShare, shareGroupKey } from '../hooks/useShare';

import styles from './button.module.css';

interface IShareButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    domain: shareGroupKey;
    url: string;
    subject?: string;
}

interface IComposedProps {
    url?: string;
    subject?: string;
}

export const ShareButton: FC<IShareButtonProps> = (props) => {
    const { children, domain, url, subject } = props;
    const { target } = useShare();

    return (
        <button {...props} className={styles.button} onClick={() => target(domain, url, subject)}>
            {children}
        </button>
    );
};

export const Print: FC<IComposedProps> = () => <ShareButton domain="print" url="nothing" />;
export const WhatsApp: FC<IComposedProps> = ({ url = window.location.href }) => <ShareButton domain="whatsapp" url={url} />;
export const Twitter: FC<IComposedProps> = ({ url = window.location.href }) => <ShareButton domain="twitter" url={url} />;
export const facebook: FC<IComposedProps> = ({ url = window.location.href }) => <ShareButton domain="facebook" url={url} />;
export const pinterest: FC<IComposedProps> = ({ url = window.location.href }) => <ShareButton domain="pinterest" url={url} />;
export const Email: FC<IComposedProps> = ({ url = window.location.href, subject }) => <ShareButton domain="email" url={url} subject={subject} />;
