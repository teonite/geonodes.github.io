import './style.scss';

import { useMemo, useState } from 'react';

import { thxNodes } from '../../../../constants';
import { CarouselIndicators } from '../../../../shared/components/layout/CarouselIndicators';
import { VideoCarousel } from '../../../../shared/components/layout/VideoCarousel';

const videosToPlay = thxNodes.map((n) => n.video);

export const ThxSection = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section id="thx-nodes">
      <header>
        <h2>teonite THX nodex</h2>
        <p>
          teonite made also a collection for its select clients, as sign of great
          collaboration and highest value
        </p>
      </header>
      <div className="collection">
        <VideoCarousel
          videos={videosToPlay}
          selectedVideoIndex={selected}
          onChange={setSelected}
        />
        <CarouselIndicators
          itemsCount={thxNodes.length}
          selectedIndex={selected}
          onChange={setSelected}
        />
      </div>
      <NodeInfo selected={selected} />
    </section>
  );
};

type NodeInfoProps = {
  selected: number;
};

const NodeInfo = ({ selected }: NodeInfoProps) => {
  const thxNode = useMemo(() => thxNodes[selected], [selected]);
  return (
    <div className="info">
      <h4>
        thx-{String(thxNode.id).padStart(4, '0')}/
        {thxNode.attributes.initials.toUpperCase()}
      </h4>
      <span>attributes</span>
      <p className="node-attributes">
        {thxNode.attributes.baseshape}
        <br />
        {thxNode.attributes.sculpture}
        <br />
        {thxNode.attributes.accentColor}
      </p>
    </div>
  );
};
