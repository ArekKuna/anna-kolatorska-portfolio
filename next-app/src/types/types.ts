export type FormattedStrapiImageData = {
  url: string;
  alt: string;
  base64: string;
  width: number;
  height: number;
};

export type AboutMeSectionData = {
  title: string;
  description: string;
  image: FormattedStrapiImageData;
};

export type SessionData = {
  description: string;
  id: string;
  image: FormattedStrapiImageData;
  ltr: boolean;
  subTitle: string;
  title: string;
};

export type InstagramFeedResponse = {
  data: InstagramFeedResponse[];
};

export type InstagramFeedChildrenGallery = {
  id: string;
  media_type: string;
  media_url: string;
  timestamp: string;
};

export type InstagramImageData = {
  id: string;
  media_url: string;
  timestamp: string;
  caption: string;
  media_type: string;
  thumbnail_url?: string;
  children?: { data: InstagramFeedChildrenGallery[] };
};
