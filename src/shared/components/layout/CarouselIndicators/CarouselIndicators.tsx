import './style.scss';

import classNames from 'classnames';
import { range } from 'lodash-es';

import { GalleryIndicator } from '../../../../components/icons/GalleryIndicator';

type Props = {
  itemsCount: number;
  selectedIndex: number;
  onChange: (index: number) => void;
};

export const CarouselIndicators = ({ itemsCount, onChange, selectedIndex }: Props) => {
  return (
    <div className="carousel-indicators">
      {range(0, itemsCount).map((index) => (
        <div
          key={index}
          onClick={() => {
            if (index !== selectedIndex) {
              onChange(index);
            }
          }}
          className={classNames('indicator-container', {
            active: index === selectedIndex,
          })}
        >
          <GalleryIndicator />
        </div>
      ))}
    </div>
  );
};
