import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export default function CustomButton({variant, children, ...rest}: ButtonProps) {

    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}