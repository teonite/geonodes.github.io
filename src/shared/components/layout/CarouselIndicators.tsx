import { range } from 'lodash-es';

import { GalleryIndicator } from '../../../components/icons/GalleryIndicator';

type Props = {
  itemsCount: number;
  selectedIndex: number;
  onChange: (index: number) => void;
};
export const CarouselIndicators = ({ itemsCount, onChange, selectedIndex }: Props) => {
  return (
    <div className="gallery-indicators">
      {range(0, itemsCount - 1).map((index) => (
        <div
          key={index}
          onClick={() => {
            if (index !== selectedIndex) {
              onChange(index);
            }
          }}
          className="indicator-container"
        >
          <GalleryIndicator color={index == selectedIndex ? '#00EECC' : '#fff'} />
        </div>
      ))}
    </div>
  );
};
