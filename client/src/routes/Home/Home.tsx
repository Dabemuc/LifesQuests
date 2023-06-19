import { useEffect, useState } from 'react'
import Tree, { Quest } from '../../interfaces'
import getQuestTrees from '../../api'
import './Home.css'
import Flow from './Flow/Flow'
import Sidebar from './Sidebar/Sidebar'

export default function Home() {
    const [questTrees, setQuestTrees] = useState<Tree[]>()
    const [questSelected, setQuestSelected] = useState<Quest>()
    const [sidebarDisplayed, setSidebarDisplayed] = useState(false)

    useEffect(() => {
        setQuestTrees(getQuestTrees())
    }, [])

    function setQuestIdSelected(quest: Quest | undefined) {
        setQuestSelected(quest)
        setSidebarDisplayed(true)
    }

    function handleBackgroundClicked() {
        setQuestSelected(undefined)
        setSidebarDisplayed(false)
    }

    return (
        <>
            <Sidebar visibility={sidebarDisplayed==true? 'visible': 'hidden'} questSelected={questSelected}/>
            {questTrees?
                <Flow 
                    questTrees={questTrees} 
                    setQuestIdSelected={setQuestIdSelected} 
                    handleBackgroundClicked={handleBackgroundClicked}
                />:
                <>Failed to load Trees</>
            }
        </>
    );

}