import Tree, { Quest } from "../../../interfaces";

interface Props {
    questTrees: Tree[],
    setQuestIdSelected: Function 
}

export default function mapTrees(props: Props) {
    /* 
        Generates questNodes from the tree objects provided in props and positions them on canvas
    */

    let tmpNodes: any = []
    let tmpEdges: any = []

    //positions startingQuest-nodes based on the width of the following quest-tree
    let totalSpaceUsedUp = 0
    props.questTrees.forEach((tree, index) => {
        const nextFollowingTreeWidth = calcFollowingTreeWidthRecursive(getCountPerDepthLvlRecursive(tree.startingQuest, 0, {}))
        mapQuestRecursive(tree.startingQuest, index, 0, index, nextFollowingTreeWidth/2 + totalSpaceUsedUp)
        totalSpaceUsedUp += nextFollowingTreeWidth
    });

    function mapQuestRecursive(quest: Quest, treeId: number, depth: number, split: number, y: number) {
        //generates a node at the given position and manages the positioning of the following nodes based on the width of their following quest-trees

        const id = quest.id
        const x = 50+250*depth

        let countPerDepthLvl = getCountPerDepthLvlRecursive(quest, 0, {})
        // console.log(countPerDepthLvl)
        const followingTreeWidth =  calcFollowingTreeWidthRecursive(countPerDepthLvl)

        // console.log({t: quest.title, x: x, y: y, split: split, followingTreeWidth: followingTreeWidth})

        tmpNodes.push({
                id: id,
                position: { x: x, y: y},
                data: { label: quest.title , quest: quest, setQuestIdSelected: props.setQuestIdSelected},
                type: 'questNode',
            })

        let spaceUsedUp = 0
        quest.followingQuests.forEach((nextQuest, i) => {
            let nextFollowingTreeWidth = calcFollowingTreeWidthRecursive(getCountPerDepthLvlRecursive(nextQuest, 0, {}))
            if (nextFollowingTreeWidth == 0) nextFollowingTreeWidth = 50
            const nextY = y - followingTreeWidth/2 + nextFollowingTreeWidth/2 + spaceUsedUp
            spaceUsedUp += nextFollowingTreeWidth
            // console.log(spaceUsedUp)
            const nextId = mapQuestRecursive(nextQuest, treeId, depth+1, i, nextY)
            tmpEdges.push({
                id: id+'-'+nextId, source: id, target: nextId
            })
        })

        return id
    }

    function getCountPerDepthLvlRecursive(quest: Quest, depth: number, countPerDepthLvl: any) {
        //returns an Object were all depth levels are mapped to the count of nodes on that level
        if(countPerDepthLvl[depth]){
            countPerDepthLvl[depth]++
        } else {
            countPerDepthLvl[depth] = 1
        }

        quest.followingQuests.forEach((nextQuest) => {
            getCountPerDepthLvlRecursive(nextQuest, depth+1, countPerDepthLvl)
        })

        return countPerDepthLvl
    }

    function calcFollowingTreeWidthRecursive(countPerDepthLvl: any) {
        // returns a width of 50 times the amount of following nodes
        let followingTreeWidth = 0;
        for(let i = Number(Object.keys(countPerDepthLvl)[0])+1; i<Object.keys(countPerDepthLvl).length; i++){
            followingTreeWidth += countPerDepthLvl[i] * 50
        }
        return followingTreeWidth
    }

    return [tmpNodes, tmpEdges]
}