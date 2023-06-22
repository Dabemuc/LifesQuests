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

export interface UserObject {
    email: string,
    email_verified: boolean,
    given_name: string,
    name: string,
    picture: string
}