export default interface Tree {
    startingQuest: Quest
}

export interface Quest {
    isDone: boolean,
    title: string,
    description: string,
    followingQuests: Quest[]
}