import Header from '../../organisms/header/header';
import AboutMe from '../../organisms/about-me/about-me';

export default function MainPage() {

    const main = {
        me: {
            ocupation: 'Desarrollador de Software'
        },
        hook: {
            large: 'Me encanta parcipar en proyectos que supongan un gran reto para mi.',
            short: '¿El tuyo es uno?',
            txtButton: '¡Contáctame ya!'
        },
        projects: {
            title: 'Algunos de mis proyectos'
        }
    }

    return (
        <>
            <Header></Header>
            <AboutMe me={main.me} hook={main.hook} projects={main.projects} />
        </>
    )
}