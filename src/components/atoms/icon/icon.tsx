import { IIcon, ISIcon } from './Iicon';
import styled from 'styled-components';

const SIcon = styled.button<ISIcon>`
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #695B32;
    color: white;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
`

export default function Icon({ icon, width, onClick }: IIcon) {
    return (
        <SIcon onClick={onClick} width={width || '56px'}>
            {icon}
        </SIcon>
    )
}