import {thxNodes} from '../../constants'
import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'
import { Carousel } from 'react-responsive-carousel';
import { CarouselIndicators } from '../../shared/components/layout/CarouselIndicators/CarouselIndicators';
import { useState } from 'react';

import './style.scss'
import { JSX } from 'react/jsx-runtime';


/**
 *  @toDo make an Item Carousel to browse thx-nodes. 
 *  xxl - 2 rows, 3 columns
 *  mobile - 2 column, 3 rows 
 */


export const NodesCarousel = () => {
  
    const itemsPerPage = 6
    const pagesNumber = Math.ceil(thxNodes.length / itemsPerPage);
    const [selected, setSelected] = useState(0);

    let pages: JSX.Element[] = [];
    

    for (let i = 0; i < pagesNumber; i++) {
        const startIndex = i * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = thxNodes.slice(startIndex, endIndex);
    
        const carouselPageItems = pageItems.map((node) => (
          <ThxNodePanel key={node.id} id={node.id} showInfo={true} />
        ));
    
        pages.push(
          <div key={i} className="nodes-carousel">
            {carouselPageItems}
          </div>
        );
      }
    
    return (
        <div className="nodes-carousel-container">
            <Carousel 
                showArrows={false} 
                showStatus={false} 
                showThumbs={false}
                showIndicators={false}
                selectedItem={selected}
                onChange={setSelected}
            >
                {pages}
            </Carousel>

            <div className="nodes-carousel-pilot">
                <CarouselIndicators
                    itemsCount={pagesNumber}
                    selectedIndex={selected}
                    onChange={setSelected}
                />
            </div>
        </div>
    )
}