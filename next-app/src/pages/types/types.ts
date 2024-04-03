export type FormattedImageData = {
  url: string;
  alt: string;
  base64: string;
};

export type AboutMeSectionData = {
  title: string;
  description: string;
  image: FormattedImageData;
};

export type SessionData = {
  description: string;
  id: string;
  image: FormattedImageData;
  ltr: boolean;
  subTitle: string;
  title: string;
};
