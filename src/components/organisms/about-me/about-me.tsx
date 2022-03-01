import { IAboutMe } from './Iabout-me';
import MainContact from '../../molecules/main-contact/main-contact';
import Projects from '../../molecules/projects/projects';
import { IProjects } from '../../molecules/projects/Iprojects';
import Me from '../../../assets/me.png';
import styled from 'styled-components';
import Lyeza from '../../../assets/projects/lyeza.png';
import Multiply from '../../../assets/projects/multiply.png';
import Pokedex from '../../../assets/projects/pokedex.png';
import Spotify from '../../../assets/projects/spotify.png';

const SAboutMe = styled.section`
    display: flex;
    height: 100vh;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    color: #1f1f1f;
`

const SMeImage = styled.div`
    width: 50%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`
const SMeText = styled.div`
    width: 50%;
    padding: 100px 20px 0;
    box-sizing: content-box;
`
const SMeInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    & h1 {
        font-size: 39px;
        text-align: center;
        margin-bottom: 0;
        line-height: 1;
    }

    & small {
        font-size: 24px;
        line-height: 1;
        text-align: center;
        color: #5A5A5A;
    }
`

const SMeDescription = styled.div`
    padding-bottom: 100px;
`
const SMeProjects = styled.div``


export default function AboutMe({ me, hook, projects }: IAboutMe) {

    const { large, short, txtButton } = hook;
    const projectsToShow: IProjects = {
        projectsTitle: projects.title,
        projects: [
            {
                imageUrl: Lyeza,
                name: "Lyeza",
                githubUrl: "https://github.com/Jose-DeAvila"
            },
            {
                imageUrl: Multiply,
                name: "Multiply",
                githubUrl: "https://github.com/Jose-DeAvila",
            },
            {
                imageUrl: Pokedex,
                name: "Pokedex",
                githubUrl: "https://github.com/Jose-DeAvila/pokedex",
                urlPage: "https://jose-deavila.github.io/pokedex"
            },
            {
                imageUrl: Spotify,
                name: "Spotify",
                githubUrl: "https://github.com/Jose-DeAvila"
            }
        ]
    }

    return (
        <SAboutMe id='#'>
            <SMeImage className="me-image">
                <img src={Me} alt="Jose Luis De Avila Mercado" />
            </SMeImage>
            <SMeText className="me-text">
                <SMeInfo className="text-info">
                    <h1>JOSE LUIS DE AVILA MERCADO</h1>
                    <small>{me.ocupation}</small>
                </SMeInfo>
                <SMeDescription className="text-description">
                    <MainContact textMain={large} textHook={short} textButton={txtButton} />
                </SMeDescription>
                <SMeProjects className='text-projects'>
                    <Projects {...projectsToShow} />
                </SMeProjects>
            </SMeText>
        </SAboutMe>
    )
}