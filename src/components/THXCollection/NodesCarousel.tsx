import {thxNodes} from '../../constants'
import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'
import './style.scss'


/**
 *  @toDo make an Item Carousel to browse thx-nodes. 
 *  xxl - 2 rows, 3 columns
 *  mobile - 2 column, 3 rows 
 */


export const NodesCarousel = () => {
    let list = [];
    let i = 0;
    for(i; i < thxNodes.length; i++){
        list.push(
            <ThxNodePanel id={thxNodes[i].id} showInfo={true}/>
        )
    }
    return (
        <div className="nodes-carousel-container">
            <div className="nodes-carousel">{list}</div>
            <div className="nodes-carousel-pilot"></div>
        </div>
    )
}