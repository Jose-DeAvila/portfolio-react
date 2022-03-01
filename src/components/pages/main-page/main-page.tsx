import Header from '../../organisms/header/header';
import AboutMe from '../../organisms/about-me/about-me';
import Knowledge from '../../organisms/knowledge/knowledge';
import Phalcon from '../../../assets/backend/phalcon.svg';
import { frontend, backend, design } from '../../../utils/images';


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

    const knowledge = {
        titleSection: 'Conocimiento',
        knowledgeFragments: [
            {
                imageUrl: design.mainImage,
                titleFragment: 'Diseño',
                descriptionFragment: 'Me gusta diseñar, crear cosas completamente nuevas e innovadoras. Me encanta diseñar UI/UX, aplicaciones móviles y web.',
                toolsFragment: {
                    title: 'Herramientas',
                    tools: [
                        {
                            imageToolUrl: design.adobeXD,
                            toolName: 'Adobe XD'
                        },
                        {
                            imageToolUrl: design.figma,
                            toolName: 'Figma'
                        }
                    ]
                }
            },
            {
                imageUrl: frontend.mainImage,
                titleFragment: 'Frontend',
                descriptionFragment: 'Me fascina codear, crear soluciones, basadas en un diseño previo, dar esa excelente primera impresión al usuario.',
                toolsFragment: {
                    title: 'Herramientas',
                    tools: [
                        {
                            imageToolUrl: frontend.nextJS,
                            toolName: 'Next.js'
                        },
                        {
                            imageToolUrl: frontend.react,
                            toolName: 'React'
                        },
                        {
                            imageToolUrl: frontend.javascript,
                            toolName: 'JavaScript'
                        },
                        {
                            imageToolUrl: frontend.css,
                            toolName: 'CSS'
                        },
                        {
                            imageToolUrl: frontend.gatsby,
                            toolName: 'Gatsby'
                        },
                        {
                            imageToolUrl: frontend.html,
                            toolName: 'HTML'
                        },
                        {
                            imageToolUrl: frontend.angular,
                            toolName: 'Angular'
                        }
                    ]
                }
            },
            {
                imageUrl: backend.mainImage,
                titleFragment: 'Backend',
                descriptionFragment: 'Crear API’s que luego se van a consumir, me hace feliz. Servir contenido para que luego sea mostrado, plasmar toda la lógica de un negocio me enloquece.',
                toolsFragment: {
                    title: 'Herramientas',
                    tools: [
                        {
                            imageToolUrl: backend.nodeJS,
                            toolName: 'Node.js'
                        },
                        {
                            imageToolUrl: backend.expressJS,
                            toolName: 'Express'
                        },
                        {
                            imageToolUrl: backend.postman,
                            toolName: 'Postman'
                        },
                        {
                            imageToolUrl: backend.php,
                            toolName: 'PHP'
                        },
                        {
                            imageToolUrl: backend.phalcon,
                            toolName: 'Phalcon'
                        }
                    ]
                }
            }
        ]
    }

    return (
        <>
            <Header />
            <AboutMe {...main} />
            <Knowledge {...knowledge} />
        </>
    )
}