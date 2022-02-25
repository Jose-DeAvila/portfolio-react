import { IPrimaryButton, IStyleProps } from './Iprimary-button';
import styled from 'styled-components'

const SButtonPrimary = styled.button<IStyleProps>`
    background: #695B32;
    color: white;
    padding: 13px 0;
    display: inline-block;
    border: none;
    outline: none;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    width: ${props => props.width};
    margin: 0 auto;
    cursor: pointer;
`

export default function PrimaryButton({ text, width }: IPrimaryButton) {

    return (
        <SButtonPrimary width={width || "100%"}>
            {text}
        </SButtonPrimary>
    )
}