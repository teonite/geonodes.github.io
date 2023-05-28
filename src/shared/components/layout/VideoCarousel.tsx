import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';

import { VideoURL } from '../../../types';

type Props = {
  videos: VideoURL[];
  selectedVideoIndex: number;
  onChange: (index: number) => void;
};

export const VideoCarousel = ({ videos, selectedVideoIndex, onChange }: Props) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      selectedItem={selectedVideoIndex}
      onChange={onChange}
    >
      {videos.map(({ video }, index) => {
        return (
          <div key={index} className="collection-image">
            <ReactPlayer
              className="video-player"
              url={video}
              height="100%"
              width="100%"
              controls={false}
              playing={index === selectedVideoIndex}
              muted={true}
              loop
              playsinline
            />
          </div>
        );
      })}
    </Carousel>
  );
};
