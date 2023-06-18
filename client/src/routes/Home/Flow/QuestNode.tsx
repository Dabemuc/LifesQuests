import { Handle, Position } from 'reactflow';
import { Quest } from '../../../interfaces';

interface Data {
    data: {
        label: string, 
        quest: Quest,
        setQuestIdSelected: Function
    }
}

export default function QuestNode({data}: Data) {
//   const onChange = useCallback((evt: any ) => {
//     console.log(evt.target.value);
//   }, []);

// console.log(data)

    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div className={data.quest.isDone==true?'questNode done':'questNode'} onClick={() => data.setQuestIdSelected(data.quest)}>
                <label htmlFor="text">{data.label}</label>
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    );
}