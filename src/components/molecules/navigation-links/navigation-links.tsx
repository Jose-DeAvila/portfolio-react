import styled from 'styled-components';
import NavigationLink from '../../atoms/navigation-link/navigation-link';

const SNavigationLinks = styled.nav`
    padding: 10px;
`

export default function NavigationLinks() {
    return (
        <SNavigationLinks>
            <NavigationLink text='Inicio' navigateTo='#'></NavigationLink>
            <NavigationLink text='Conocimientos' navigateTo='#knowledge'></NavigationLink>
            <NavigationLink text='Experiencia' navigateTo='#experience'></NavigationLink>
            <NavigationLink text='Contacto' navigateTo='#contact'></NavigationLink>
        </SNavigationLinks>
    )
}