export interface IToolIcon {
    imageToolUrl: string,
    toolName: string
}

export interface IToolsContainer {
    title: string,
    tools: IToolIcon[];
}