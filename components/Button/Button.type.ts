import React from "react";

export interface ButtonProps {
    children?: React.ReactNode,
    variation?: 'with-icon' | 'label-only' | 'link' | 'icon-only',
    color?: 'primary' | 'secondary' | 'tertiary' | 'ghost',
    hasIcon?: boolean,
}