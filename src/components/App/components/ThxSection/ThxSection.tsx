import './style.scss';

import classNames from 'classnames';
import { useState } from 'react';

import { thxNodes } from '../../../../constants';
import { NodeInfo } from '../../../../shared/components/layout/NodeInfo/NodeInfo';
import { CarouselIndicators } from '../../../../shared/components/layout/CarouselIndicators/CarouselIndicators';
import { VideoCarousel } from '../../../../shared/components/layout/VideoCarousel';

type Props = {
  odd?: boolean;
};

const videosToPlay = thxNodes.map((n) => n.video);

export const ThxSection = ({ odd = false }: Props) => {
  const [selected, setSelected] = useState(0);
  return (
    <section
      id="thx-nodes"
      className={classNames({
        odd: odd,
      })}
    >
      <header>
        <h2>thx-nodes</h2>
        <p>
          <span className="bold">teonite</span> harnessed the power of the platform by
          curating a bespoke collection for its most esteemed clients, creating artifacts
          that reflects their remarkable partnership and unparalleled value.
        </p>
      </header>
      <div className="thx-collection">
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