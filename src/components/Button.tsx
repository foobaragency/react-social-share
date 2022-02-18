import React, { FC } from 'react';

export interface IButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: FC<IButtonProps> = (props) => {
    const { children } = props;

    return <button {...props}>{children}</button>;
};
