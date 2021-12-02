import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './Button.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    error?: boolean;
};

const Button: React.FC<SuperButtonPropsType> = ({ error, className, ...restProps }) => {
    const finalClassName = `${error ? s.error + ' ' + s.default : s.default} ${className}`;

    return <button className={finalClassName} {...restProps} />;
};

export default Button;
