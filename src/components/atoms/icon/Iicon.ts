import { StyledIcon } from '@styled-icons/styled-icon';
import { MouseEventHandler, ReactChild } from 'react';

export interface IIcon {
    icon: ReactChild,
    width?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}

export interface ISIcon {
    width: string
}