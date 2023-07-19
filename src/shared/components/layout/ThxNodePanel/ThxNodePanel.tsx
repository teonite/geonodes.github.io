import { NodeInfo } from '../../../../shared/components/layout/NodeInfo/NodeInfo';
import ReactPlayer from 'react-player';
import {thxNodes} from  '../../../../constants'

// import './style.scss';

const findThxById = (id: number) => {
    if( thxNodes[id-1]?.id == id) return thxNodes[id - 1] // most of the time this will be id
    for(let i = 0; i < thxNodes.length; i++){ // iterating all nodes for other cases
        if(thxNodes[i].id === id) return thxNodes[i];
    }
    return thxNodes[0] // eventually return just the first node.
}

interface nodeProps{
    id: number
    showInfo: boolean
}

export const ThxNodePanel = (props: nodeProps) =>{
    const {id} = props;
    const {showInfo} = props;
    let thxNode = findThxById(id);
    const info = showInfo ?  <NodeInfo selected={thxNode.id - 1} /> : null
    return (
            <section id="thx-nodes-panel">
                <ReactPlayer
                    id="geo-head"
                    url={thxNode.video.video}
                    playing={true}
                    loop
                    muted
                    controls={false}
                    width="100%"
                    height="auto"
                />
                {info}
            </section>
    )
}