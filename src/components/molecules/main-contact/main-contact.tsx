import styled from 'styled-components';
import { IMainContact } from "./Imain-contact";
import PrimaryButton from '../../atoms/primary-button/primary-button';

const STextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`

const STextMain = styled.h2`
    font-size: 30px;
    margin: 0;
    font-weight: normal;
`

const STextHook = styled.h3`
    font-size: 30px;
    margin: 5px 0 40px;
    font-weight: 500;
`

export default function MainContact({ textMain, textHook, textButton }: IMainContact) {
    return (
        <STextContainer>
            <STextMain>{textMain}</STextMain>
            <STextHook>{textHook}</STextHook>
            <PrimaryButton width='50%' text={textButton} />
        </STextContainer>
    )
}