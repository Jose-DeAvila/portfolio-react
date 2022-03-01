import { IToolsContainer, IToolIcon } from "./itools-container"
import styled from 'styled-components';

const SToolIcon = styled.li`
    display: inline-block;
    display: flex;
    height: 100%;
    max-height: 70px;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover small{
        bottom: -15px;
        opacity: 1;
    }

    img {
        height: 100%;
        aspect-ratio: 1 / 1;
    }

    small {
        font-size: 12px;
        color: #2c2c2c;
        font-weight: bold;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        transition: .3s ease all;
        opacity: 0;
    }
`

function ToolIcon({ imageToolUrl, toolName }: IToolIcon) {
    return (
        <SToolIcon>
            <img src={imageToolUrl} alt={`${toolName.charAt(0).toUpperCase() + toolName.slice(1)} icon`} />
            <small>{toolName}</small>
        </SToolIcon>
    )
}

const SToolsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
`

const SToolsContainerTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f1f1f;
`

const SToolsContainerList = styled.ul`
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    list-style: none;
    padding: 0;
    row-gap: 2rem;
`

export default function ToolsContainer({ title, tools }: IToolsContainer) {
    return (
        <SToolsContainer>
            <SToolsContainerTitle>{title}</SToolsContainerTitle>
            <SToolsContainerList>
                {tools.map((tool, index) => (
                    <ToolIcon imageToolUrl={tool.imageToolUrl} toolName={tool.toolName} key={index}></ToolIcon>
                ))}
            </SToolsContainerList>
        </SToolsContainer>
    )

}