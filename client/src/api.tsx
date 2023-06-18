import Tree from "./interfaces"

export default function getQuestTrees(): Tree[] {

    const tree1: Tree = {
        startingQuest: {
            isDone: true,
            title: "0",
            description: "asd",
            followingQuests: [{
                isDone: false,
                title: "1a",
                description: "fgh",
                followingQuests: [{
                    isDone: false,
                    title: "2aa",
                    description: "fgh",
                    followingQuests: [{
                        isDone: true,
                        title: "3aaa",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3aab",
                        description: "fgh",
                        followingQuests: []
                    }]
                },
                {
                    isDone: false,
                    title: "2ab",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: false,
                    title: "2ac",
                    description: "fgh",
                    followingQuests: [{
                        isDone: true,
                        title: "3aba",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abb",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abc",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abd",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3aba",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abb",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abc",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abd",
                        description: "fgh",
                        followingQuests: []
                    }]
                },
                {
                    isDone: true,
                    title: "2ad",
                    description: "fgh",
                    followingQuests: [{
                        isDone: true,
                        title: "3aba",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abb",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abc",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abd",
                        description: "fgh",
                        followingQuests: []
                    }]
                }]
            },
            {
                isDone: false,
                title: "1b",
                description: "fgh",
                followingQuests: [{
                    isDone: true,
                    title: "2ba",
                    description: "fgh",
                    followingQuests: [{
                        isDone: true,
                        title: "3baa",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3bab",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3aba",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abb",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abc",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abd",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3aba",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abb",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abc",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3abd",
                        description: "fgh",
                        followingQuests: []
                    }]
                },
                {
                    isDone: true,
                    title: "2bb",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3aba",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abb",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abc",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abd",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3aba",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abb",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abc",
                    description: "fgh",
                    followingQuests: []
                },
                {
                    isDone: true,
                    title: "3abd",
                    description: "fgh",
                    followingQuests: []
                }]
            }]
        }
    }


    const tree2: Tree = {
        startingQuest: {
            isDone: false,
            title: "Test2",
            description: "qwe",
            followingQuests: [{
                isDone: true,
                title: "2a",
                description: "fgh",
                followingQuests: []
            },
            {
                isDone: true,
                title: "2b",
                description: "fgh",
                followingQuests: []
            }]
        }
    }
    const tree3: Tree = {
        startingQuest: {
            isDone: true,
            title: "Test3",
            description: "qwe",
            followingQuests: [{
                isDone: true,
                title: "3a",
                description: "fgh",
                followingQuests: [
                    {
                        isDone: true,
                        title: "3aa",
                        description: "fgh",
                        followingQuests: []
                    },
                    {
                        isDone: true,
                        title: "3ab",
                        description: "fgh",
                        followingQuests: []
                    }
                ]
            },
            {
                isDone: true,
                title: "3b",
                description: "fgh",
                followingQuests: []
            }]
        }
    }
    const tree4: Tree = {
        startingQuest: {
            isDone: false,
            title: "Test4",
            description: "qwe",
            followingQuests: []
        }
    }
    return [tree1, tree2, tree3, tree4]
    // return [tree1]
}