import { useEffect } from 'react'
import { Quest } from '../../../interfaces'
import './Sidebar.css'

interface Props {
    width: string,
    questSelected: Quest | undefined
}

export default function Sidebar(props: Props) {

    // useEffect(()=>{
    //     console.log(props.questSelected)
    // }, [props.questSelected])


    return (
        <div className="sidebar" style={{width: props.width}}>
            {props.questSelected? <h1>{props.questSelected.title}</h1>: "no quest selected"}
        </div>
    )
}