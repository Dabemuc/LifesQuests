import ReactFlow, { Background, Controls, NodeChange, Node, EdgeChange, applyEdgeChanges, applyNodeChanges, addEdge, Connection, Edge, NodeOrigin, } from 'reactflow';
import { useState, useCallback, useEffect, SetStateAction } from 'react';
import 'reactflow/dist/style.css';
import './Flow.css'
import QuestNode from './QuestNode'
import Tree, { Quest } from '../../../interfaces';
import mapTrees from './TreeMapper';

interface Props {
    questTrees: Tree[],
    setQuestIdSelected: Function 
}

export default function Flow(props: Props) {

    const nodeTypes = {questNode: QuestNode}

    const [nodes, setNodes] = useState<any[]>([]);
    const [edges, setEdges] = useState<any[]>([]);

    const nodeOrigin: NodeOrigin = [0.5, 0.5];  

    const onNodesChange = useCallback( (changes: NodeChange[]) => setNodes((nds: Node<any>[]) => applyNodeChanges(changes, nds)),[] );
    const onEdgesChange = useCallback( (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),[] );
    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    useEffect(() => {
        const [mappedNodes, mappedEdges] = mapTrees(props)
        setNodes(mappedNodes)
        setEdges(mappedEdges)
    },[])


    return (
        <ReactFlow 
            nodeOrigin={nodeOrigin}
            nodes={nodes}
            // onNodesChange={onNodesChange}
            edges={edges}
            // onEdgesChange={onEdgesChange}
            // onConnect={onConnect}
            nodeTypes={nodeTypes}
        >
            <Background color='#aaaaaa' style={{backgroundColor: '#18181a'}}/>
            <Controls />
        </ReactFlow>
      );
}