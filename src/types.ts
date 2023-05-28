export type VideoURL = {
  video: string;
  poster?: string;
};

export type ThxNodeAttributes = {
  initials: string;
  baseshape: string;
  sculpture: string;
  accentColor: string;
};

export type ThxNode = {
  video: VideoURL;
  id: number;
  attributes: ThxNodeAttributes;
};
