import { Handle, Position } from 'reactflow';

interface Data {
    data: any,
}

export default function QuestNode({data}: Data) {
//   const onChange = useCallback((evt: any ) => {
//     console.log(evt.target.value);
//   }, []);

    return (
        <>
            <Handle type="target" position={Position.Left} />
            <div className={data.done==true?'questNode done':'questNode'}>
                <label htmlFor="text">{data.label}</label>
            </div>
            <Handle type="source" position={Position.Right} />
        </>
    );
}