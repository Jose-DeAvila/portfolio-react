import { IKnowledgeFragment } from "./iknowledge-fragment"
import styled from 'styled-components';
import ToolsContainer from '../../atoms/tools-container/tools-container';

const SKnowledgeFragment = styled.article`
    text-align: center;
    padding: 60px 55px 30px 55px;

    &:first-child{
        border-right: 1px solid #9A9A9A;
    }
    &:last-child{
        border-left: 1px solid #9A9A9A;
    }
`

const SKnowledgeFragmentImage = styled.img`
    width: 150px;
    height: 150px;    
`

const SKnowledgeFragmentTitle = styled.h3`
    font-size: 32px;
    color: #1f1f1f;
`

const SKnowledgeFragmentDescription = styled.p`
    font-size: 24px;
    line-height: 36px;
    color: #1f1f1f;
`

export default function KnowledgeFragment({ imageUrl, titleFragment, descriptionFragment, toolsFragment }: IKnowledgeFragment) {
    return (
        <SKnowledgeFragment>
            <SKnowledgeFragmentImage src={imageUrl} alt={`${titleFragment.charAt(0).toUpperCase() + titleFragment.slice(1)} icon`} />
            <SKnowledgeFragmentTitle>
                {titleFragment}
            </SKnowledgeFragmentTitle>
            <SKnowledgeFragmentDescription>{descriptionFragment}</SKnowledgeFragmentDescription>
            <ToolsContainer {...toolsFragment} />
        </SKnowledgeFragment>
    )
}