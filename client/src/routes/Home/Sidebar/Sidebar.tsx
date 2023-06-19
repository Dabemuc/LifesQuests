import { useEffect } from 'react'
import { Quest } from '../../../interfaces'
import './Sidebar.css'

interface Props {
    visibility: 'hidden' | 'visible',
    questSelected: Quest | undefined
}

export default function Sidebar(props: Props) {

    // useEffect(()=>{
    //     console.log(props.questSelected)
    // }, [props.questSelected])


    return (
        <div className="sidebar" style={{visibility: props.visibility}}>
            {props.questSelected? <h1>{props.questSelected.title}</h1>: "no quest selected"}
        </div>
    )
}