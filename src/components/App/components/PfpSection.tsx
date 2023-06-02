import classNames from 'classnames';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';

import { pfpVideoUrls } from '../../../constants';
import { CarouselIndicators } from '../../../shared/components/layout/CarouselIndicators/CarouselIndicators';
import { ExternalLink } from '../../../shared/components/layout/ExternalLink/ExternalLink';

type Props = {
  odd?: boolean;
};

export const PfpSection = ({ odd = false }: Props) => {
  const [selected, setSelected] = useState(0);
  return (
    <section id="collection-pfp" className={classNames('collection', { odd: odd })}>
      <h3>teonite geonodes</h3>
      <p>
        inaugural use case involved leveraging the platform to generate and mint unique
        PFP for every teonite crew member. This approach enabled testing, exploration, and
        added an element of fun to the process
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
