import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';

import { pfpVideoUrls } from '../../../constants';
import { CarouselIndicators } from '../../../shared/components/layout/CarouselIndicators';
import { ExternalLink } from '../../../shared/components/layout/ExternalLink/ExternalLink';

export const PfpSection = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section id="collection-pfp" className="collection">
      <h3>teonite pfp</h3>
      <p>
        teonite is a deep tech studio and used geonodes.xyz platform to render and mint a
        custom PFP NFT for each employee.
      </p>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={selected}
        onChange={setSelected}
      >
        {pfpVideoUrls.map(({ video }, index) => {
          return (
            <div key={index} className="collection-image">
              <ReactPlayer
                className="video-player"
                url={video}
                height="100%"
                width="100%"
                controls={false}
                playing={index === selected}
                muted={true}
                loop
                playsinline
              />
            </div>
          );
        })}
      </Carousel>
      <div className="gallery-link">
        <ExternalLink
          url="https://opensea.io/collection/teonite-geonodes"
          text="view full collection on opensea.io"
        />
      </div>
      <CarouselIndicators
        itemsCount={pfpVideoUrls.length}
        selectedIndex={selected}
        onChange={setSelected}
      />
    </section>
  );
};
