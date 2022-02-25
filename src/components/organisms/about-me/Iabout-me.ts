export interface IAboutMe {
    me: IMe,
    hook: IHook,
    projects: IProjects
}

interface IMe {
    ocupation: string,
}

interface IHook {
    large: string,
    short: string,
    txtButton: string
}

interface IProjects {
    title: string
}