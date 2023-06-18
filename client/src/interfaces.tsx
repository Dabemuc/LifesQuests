export default interface Tree {
    startingQuest: Quest
}

export interface Quest {
    id: string
    isDone: boolean,
    title: string,
    description: string,
    followingQuests: Quest[]
}