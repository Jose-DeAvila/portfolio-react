import styled from 'styled-components';
import NavigationLinks from '../../molecules/navigation-links/navigation-links';
import Icon from '../../atoms/icon/icon';
import { Sun } from '@styled-icons/heroicons-outline/Sun';
import { ArrowDownload } from '@styled-icons/fluentui-system-regular/ArrowDownload';
import Resume from '../../../assets/cv.pdf'

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    position: fixed;
    width: 96%;
    backdrop-filter: blur(17px);
    background: linear-gradient(180deg, #A0927F 0%, rgba(176, 176, 176, 0) 100%, rgba(176, 176, 176, 0) 100%, #000000 100%);
`

const SHeaderCV = styled.a`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: #2E2E2E;
`

export default function Header() {

    const iconClick = () => {
        console.log('Changing theme...')
    }

    return (
        <SHeader>
            <Icon icon={<Sun size={46} />} onClick={iconClick} ></Icon>
            <NavigationLinks />
            <SHeaderCV href={Resume} download>
                CV<ArrowDownload size={24} />
            </SHeaderCV>
        </SHeader>
    )
}