import { IToolsContainer } from "../../atoms/tools-container/itools-container"

export interface IKnowledgeFragment {
    imageUrl: string,
    titleFragment: string,
    descriptionFragment: string,
    toolsFragment: IToolsContainer
}