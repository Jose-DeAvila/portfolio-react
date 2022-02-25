import styled from 'styled-components';
import { IProject } from './Iproject';
import { Github, Eye } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom'

const SProyectInfo = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: #2E2E2E;
    font-size: 1.5rem;
    opacity: 0;
    transition: .5s ease-in-out opacity;
    z-index: 2;

    & > p {
        margin: 0;
        text-align: center;
        
        & > a:last-child {
            color: #2E2E2E;
            text-decoration: none;
            margin-left: 10px;
        }
    }
`

const SProyect = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.5s ease-in-out opacity;
        z-index: 1;
    }

    &:hover {
        &::after {
            opacity: 1;
            pointer-events: none;
        }

        ${SProyectInfo} {
            opacity: 1;
        }
    }
`

const SProyectImage = styled.img`
    width: 100%;
`


export default function Project({ imageUrl, name, urlPage, githubUrl }: IProject) {
    return (
        <SProyect>
            <Link to={urlPage || `/${name}`}>
                <SProyectImage alt={name} src={imageUrl} />
            </Link>
            <SProyectInfo>
                <span>{name}</span>
                <p>
                    <a href={githubUrl} target="_blank"><Github size={30} color="#2E2E2E" /></a>
                    {urlPage && <a href={urlPage} target="_blank"><Eye size={30} color="#2E2E2E" /></a>}
                </p>
            </SProyectInfo>
        </SProyect>
    )
}