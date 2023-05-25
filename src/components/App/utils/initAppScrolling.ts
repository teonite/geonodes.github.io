import { scroll } from 'motion';

export const initAppScrolling = () => {
  const item = document.getElementById('welcome');
  const item2 = document.getElementById('geonodes');
  const item3 = document.getElementById('collection-pfp');

  const progressWelcome = document.getElementById('progress-welcome');
  const progressGeonodes = document.getElementById('progress-geonodes');
  const progressCollectionPfp = document.getElementById('progress-collection-pfp');

  if (
    !item ||
    !item2 ||
    !item3 ||
    !progressWelcome ||
    !progressGeonodes ||
    !progressCollectionPfp
  ) {
    return;
  }

  scroll(
    ({ y }) => {
      if (
        y.current + 164 < y.targetOffset ||
        y.current + 1 > y.targetLength + y.targetOffset
      ) {
        progressWelcome.style.height = '0px';
      } else {
        progressWelcome.style.height = '56px';
      }
    },
    {
      target: item,
    }
  );

  scroll(
    ({ y }) => {
      if (
        y.current < y.targetOffset ||
        y.current + 1 >= y.targetLength + y.targetOffset
      ) {
        progressGeonodes.style.height = '0px';
      } else {
        progressGeonodes.style.height = '56px';
      }
    },
    {
      target: item2,
    }
  );

  scroll(
    ({ y }) => {
      if (
        y.current + 1 <= y.targetOffset ||
        y.current > y.containerLength + y.targetOffset - 62
      ) {
        progressCollectionPfp.style.height = '0px';
      } else {
        progressCollectionPfp.style.height = '56px';
      }
    },
    {
      target: item3,
    }
  );
};
