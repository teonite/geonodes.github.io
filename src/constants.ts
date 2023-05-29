import pfp1 from './assets/images/gallery-pfp/AC375921867.jpg';
import pfp2 from './assets/images/gallery-pfp/AK986665260.jpg';
import pfp3 from './assets/images/gallery-pfp/AP658101057.jpg';
import pfp4 from './assets/images/gallery-pfp/BG499717119.jpg';
import pfp5 from './assets/images/gallery-pfp/FS898028791.jpg';
import pfp6 from './assets/images/gallery-pfp/HS756967821.jpg';
import pfp7 from './assets/images/gallery-pfp/JC244552313.jpg';
import pfp8 from './assets/images/gallery-pfp/KC123335648.jpg';
import pfp9 from './assets/images/gallery-pfp/KK068123852.jpg';
import pfp10 from './assets/images/gallery-pfp/MC631701771.jpg';
import poster_JC244552313 from './assets/images/video_posters/JC244552313.jpg';
import poster_KC123335648 from './assets/images/video_posters/KC123335648.jpg';
import poster_KK068123852 from './assets/images/video_posters/KK068123852.jpg';
import poster_MG019297983 from './assets/images/video_posters/MG019297983.jpg';
import poster_RO134319190 from './assets/images/video_posters/RO134319190.jpg';
import poster_thx0001 from './assets/images/video_posters/thx-0001.png';
import poster_thx0002 from './assets/images/video_posters/thx-0002.png';
import poster_thx0003 from './assets/images/video_posters/thx-0003.png';
import poster_thx0004 from './assets/images/video_posters/thx-0004.png';
import { ThxNode, VideoURL } from './types';

export const pfpImages = [
  pfp1,
  pfp2,
  pfp3,
  pfp4,
  pfp5,
  pfp5,
  pfp6,
  pfp7,
  pfp8,
  pfp9,
  pfp10,
];

export const pfpVideoUrls: VideoURL[] = [
  {
    video: 'videos/RO134319190/master.m3u8',
    poster: poster_RO134319190,
  },
  {
    video: 'videos/JC244552313/master.m3u8',
    poster: poster_JC244552313,
  },
  {
    video: 'videos/KC123335648/master.m3u8',
    poster: poster_KC123335648,
  },
  {
    video: 'videos/KK068123852/master.m3u8',
    poster: poster_KK068123852,
  },
  {
    video: 'videos/MG019297983/master.m3u8',
    poster: poster_MG019297983,
  },
];

export const thxNodes: ThxNode[] = [
  {
    id: 1,
    attributes: {
      initials: 'JL',
      baseshape: 'cylinder',
      sculpture: 'beethoveen',
      accentColor: 'e6293c',
    },
    video: {
      video: 'videos/thx-0001/master.m3u8',
      poster: poster_thx0001,
    },
  },
  {
    id: 2,
    attributes: {
      initials: 'KGvB',
      baseshape: 'plane',
      sculpture: 'gutenberg',
      accentColor: '3b9dd6',
    },
    video: {
      video: 'videos/thx-0002/master.m3u8',
      poster: poster_thx0002,
    },
  },
  {
    id: 3,
    attributes: {
      initials: 'BS',
      baseshape: 'sphere',
      sculpture: 'einstein',
      accentColor: '3b9dd6',
    },
    video: {
      video: 'videos/thx-0003/master.m3u8',
      poster: poster_thx0003,
    },
  },
  {
    id: 4,
    attributes: {
      initials: 'MK',
      baseshape: 'cube',
      sculpture: 'nimph',
      accentColor: '3684fc',
    },
    video: {
      video: 'videos/thx-0004/master.m3u8',
      poster: poster_thx0004,
    },
  },
];

export const Colors = {
  secondary: '#000000',
  magenta: '#ff0064',
  green: '#00ff64',
  primary: '#ffffff',
  accent: '#00eecc',
  textPrimary: '#000000',
  textSeconadry: '#ffffff',
};
