import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'
import { Carousel } from 'react-responsive-carousel';
import { CarouselIndicators } from '../../shared/components/layout/CarouselIndicators/CarouselIndicators';
import { useState } from 'react';
import { useContract } from "@thirdweb-dev/react";
import { abi } from "../../../contract-cache.json" 
import { CONTRACT_ADDRESS } from "../../../nft-config.json"
import './style.scss'
import { JSX } from 'react/jsx-runtime';

export const NodesCarousel = () => {
  const { contract } = useContract(CONTRACT_ADDRESS, abi);

    const itemsPerPage = 6
    const [selected, setSelected] = useState(0);
    let pages: JSX.Element[] = [];
    const pagesNumber = 3 /* to dynamically calculate the number of pages, it would be better to have a smart contract function totalSupply() */
    let currentPage = 0;
    while(true) {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      let crntId = 1
      const pageItems = Array.from({ length: itemsPerPage }, (_, index) => startIndex + index);
      const carouselPageItems = pageItems.map((index) => (
        <ThxNodePanel key={index} nodeId={(currentPage*6) + crntId++} showInfo={true} playOnHover={true} contract={contract}/>
      ));
  
      pages.push(
        <div key={currentPage} className="nodes-carousel">
          {carouselPageItems}
        </div>
      );
      currentPage++
      if(currentPage > pagesNumber) break;
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