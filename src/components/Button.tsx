import React, { FC } from 'react';

import styles from './button.module.css';

export type IButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<IButtonProps> = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};
