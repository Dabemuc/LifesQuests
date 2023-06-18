import { useEffect, useState } from 'react'
import Tree, { Quest } from '../../interfaces'
import getQuestTrees from '../../api'
import './Home.css'
import Flow from './Flow/Flow'
import Sidebar from './Sidebar/Sidebar'

export default function Home() {
    const [questTrees, setQuestTrees] = useState<Tree[]>()
    const [questSelected, setQuestSelected] = useState<Quest>()

    useEffect(() => {
        setQuestTrees(getQuestTrees())
    }, [])

    function setQuestIdSelected(quest: Quest) {
        console.log(quest)
        setQuestSelected(quest)
    }


    return (
        <>
            <Sidebar width='30%' questSelected={questSelected}/>
            {questTrees?<Flow questTrees={questTrees} setQuestIdSelected={setQuestIdSelected}/>:<>Failed to load Trees</>}
        </>
    );

}