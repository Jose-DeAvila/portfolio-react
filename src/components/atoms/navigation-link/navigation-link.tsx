import { INavigationLink } from './Inavigation-link'
import styled from 'styled-components'
import { useState } from 'react';

const SNavigationLinkAnchor = styled.a`
    padding: 10px;
    color: #2E2E2E;
    text-decoration: none;
    font-family: 'Poppins', sans-serif; 
    font-size: 24px;
    margin: 0 10px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 2px;
        opacity: 0;
        background-color: #3b3b3b;
        transition: .4s ease all;
    }

    &:hover::after {
        width: 100%;
        bottom: 5px;
        opacity: 1;
    }
`

export default function NavigationLink({ text, navigateTo }: INavigationLink) {

    return (
        <SNavigationLinkAnchor href={navigateTo}>{text}</SNavigationLinkAnchor>
    )
}