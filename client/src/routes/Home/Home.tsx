import { useEffect, useState } from 'react'
import Tree from '../../interfaces'
import getQuestTrees from '../../api'
import './Home.css'
import Flow from './Flow/Flow'

export default function Home() {
    const [questTrees, setQuestTrees] = useState<Tree[]>()

    useEffect(() => {
        setQuestTrees(getQuestTrees())
    }, [])
    

    return (
        <>
            {questTrees?<Flow questTrees={questTrees} />:<>No Trees found</>}
        </>
    );

}